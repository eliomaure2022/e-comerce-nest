import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Cart } from 'src/cart/entities/cart.entity';
import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductInOrder } from 'src/product_in_order/entities/product_in_order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(ProductInOrder)
    private productInOrderRepository: Repository<ProductInOrder>,

    @InjectRepository(ProductInCart)
    private productInCartRepository: Repository<ProductInCart>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const userId = createOrderDto.userId;
    console.log(userId);

    const cartToUser = await this.cartRepository.findOne({ where: { userId } });
    console.log(cartToUser.totalPrice);

    if (!cartToUser) {
      throw new Error(
        `No se encontró un carrito para el usuario con ID ${userId}`
      );
    }

    const newOrder = {
      userId: cartToUser.userId,
      totalPrice: cartToUser.totalPrice,
      status: false,
    };
    console.log(newOrder);

    const result = this.orderRepository.create(newOrder);
    const savedOrder = await this.orderRepository.save(result);

    console.log(newOrder);

    const orderId = savedOrder.id;
    const status = savedOrder.status;

    const productsToCart = await this.productInCartRepository.find();
    console.log(productsToCart);

    productsToCart.forEach(async (arrayProducts) => {
      const { productId, quantity, cartId } = arrayProducts;

      await this.productRepository.findOne({
        where: { id: arrayProducts.id },
      });
      this.productInOrderRepository.save({
        cartId,
        productId,
        quantity,
        orderId,
        status,
      });
      await this.productInCartRepository.delete({ cartId: cartToUser.id });
    });

    return result;
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
