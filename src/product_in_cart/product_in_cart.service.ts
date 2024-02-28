import { Injectable } from '@nestjs/common';
//import { CreateProductInCartDto } from './dto/create-product_in_cart.dto';
//import { UpdateProductInCartDto } from './dto/update-product_in_cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductInCart } from './entities/product_in_cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductInCartService {
  constructor(
    @InjectRepository(ProductInCart)
    private productInCartRepository: Repository<ProductInCart>
  ) {}

  // create(createProductInCartDto: CreateProductInCartDto) {
  //   return 'This action adds a new productInCart';
  // }

  async findAll() {
    const result = await this.productInCartRepository.find();
    return result;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} productInCart`;
  // }

  // update(id: number, updateProductInCartDto: UpdateProductInCartDto) {
  //   return `This action updates a #${id} productInCart`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} productInCart`;
  // }
}
