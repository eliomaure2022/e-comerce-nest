import { Module } from '@nestjs/common';
import { ProductInOrderService } from './product_in_order.service';
import { ProductInOrderController } from './product_in_order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInOrder } from './entities/product_in_order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInOrder])],
  controllers: [ProductInOrderController],
  providers: [ProductInOrderService],
})
export class ProductInOrderModule {}
