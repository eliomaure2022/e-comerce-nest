import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from './entities/order.entity';
import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductInOrder } from 'src/product_in_order/entities/product_in_order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    TypeOrmModule.forFeature([Cart]),
    TypeOrmModule.forFeature([ProductInCart]),
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([ProductInOrder]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
