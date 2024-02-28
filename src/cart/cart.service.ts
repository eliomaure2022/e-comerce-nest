import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
//import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

import { Product } from 'src/product/entities/product.entity';

import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(ProductInCart)
    private productInCartRepository: Repository<ProductInCart>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>
  ) {}
  async create(createCartDto: CreateCartDto) {
    const cart = this.cartRepository.create(createCartDto);
    await this.cartRepository.save(cart);
    return cart;
  }

  async findAll() {
    const carts = await this.cartRepository.find();
    return carts;
  }

  async addProduct(cartId: number, newProductInCart: any) {
    // Crear el producto en el carrito
    const result = await this.productInCartRepository.save({
      ...newProductInCart,
      cartId: cartId,
    });

    if (result) {
      const cart = await this.cartRepository.findOne({
        where: { id: result.cartId },
      });

      if (cart) {
        const productAdd = await this.productRepository.findOne({
          where: {
            id: newProductInCart.productId,
          },
        });

        const existingProductInCart =
          await this.productInCartRepository.findOne({
            where: {
              cartId: cartId,
              productId: newProductInCart.productId,
            },
          });

        if (existingProductInCart) {
          existingProductInCart.quantity += newProductInCart.quantity;
          await this.productInCartRepository.save(existingProductInCart);

          const price = Number(productAdd.price);
          if (productAdd.availableQty >= newProductInCart.quantity) {
            if (cart.totalPrice === 0) {
              price * newProductInCart.quantity;
            } else {
              const newTotalPrice =
                Number(cart.totalPrice) + price * newProductInCart.quantity;

              // Actualizar el precio total del carrito en la base de datos
              await this.cartRepository.update(cartId, {
                totalPrice: newTotalPrice,
              });

              // Obtener el carrito actualizado de la base de datos
              const updatedCart = await this.cartRepository.findOneOrFail({
                where: { id: cartId },
              });

              //actualizar la cantidad disponible del producto
              const updateQty = await this.productRepository.update(
                { id: newProductInCart.productId },
                {
                  availableQty:
                    productAdd.availableQty - newProductInCart.quantity,
                }
              );
              updateQty;

              return updatedCart.totalPrice;
            }
          }
        }
      }

      return result;
    }
  }

  async findOne(id: number) {
    const user = await this.cartRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('Cart not found');
    return user;
  }
}
