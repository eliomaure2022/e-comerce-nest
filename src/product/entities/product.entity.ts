import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';
import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { ProductInOrder } from 'src/product_in_order/entities/product_in_order.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @Column('int')
  availableQty: number;

  @Column('varchar')
  imageUrl: string;

  @Column('int')
  userId: number;

  @OneToMany(() => User, (user) => user.product)
  @JoinColumn()
  user: User;

  @ManyToMany(() => ProductInCart, (productInCart) => productInCart.product)
  cart: Cart[];

  @ManyToMany(() => ProductInOrder, (productInOrder) => productInOrder.product)
  orders: Order[];
}
