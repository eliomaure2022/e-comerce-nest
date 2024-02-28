import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { ProductInCart } from 'src/product_in_cart/entities/product_in_cart.entity';
import { ProductInOrder } from 'src/product_in_order/entities/product_in_order.entity';
import { Product } from 'src/product/entities/product.entity';
import { Order } from 'src/order/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductInOrder]),
    TypeOrmModule.forFeature([Cart]),
    TypeOrmModule.forFeature([ProductInCart]),
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
