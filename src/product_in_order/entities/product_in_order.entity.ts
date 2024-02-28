import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductInOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  cartId: number;

  @Column('int')
  orderId: number;

  @Column('int')
  productId: number;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @Column('boolean')
  status: boolean;

  @ManyToOne(() => Order, (order) => order.productsInOrder)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
}
