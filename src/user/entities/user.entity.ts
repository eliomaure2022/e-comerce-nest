import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  username: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  password: string;

  @OneToOne(() => Cart, (cart) => cart.user, { cascade: true }) // Corregir la definición de la relación
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.user)
  product: Product;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
