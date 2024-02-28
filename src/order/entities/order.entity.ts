import { ProductInOrder } from 'src/product_in_order/entities/product_in_order.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  totalPrice: number;

  @Column('int')
  userId: number;

  @Column('boolean')
  status: boolean;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => ProductInOrder, (productInOrder) => productInOrder.order)
  productsInOrder: ProductInOrder[];
}
