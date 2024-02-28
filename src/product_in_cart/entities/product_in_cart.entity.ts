import { Cart } from 'src/cart/entities/cart.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductInCart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  cartId: number;

  @Column('int')
  productId: number;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @Column('boolean')
  status: boolean;

  @ManyToOne(() => Cart, (cart) => cart.productsInCart)
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.cart)
  product: Product;
}
