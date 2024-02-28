import { Module } from '@nestjs/common';
import { ProductInCartService } from './product_in_cart.service';
import { ProductInCartController } from './product_in_cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInCart } from './entities/product_in_cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInCart])],
  controllers: [ProductInCartController],
  providers: [ProductInCartService],
})
export class ProductInCartModule {}
