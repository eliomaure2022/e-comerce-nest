import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  userId: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  totalPrice: number;

  @OneToOne(() => User, (user) => user.cart) // Corregir la definición de la relación
  @JoinColumn()
  user: User;

  @OneToMany(() => ProductInCart, (productInCart) => productInCart.cart)
  productsInCart: ProductInCart[];
}
