import { Injectable } from '@nestjs/common';
import { CreateProductInOrderDto } from './dto/create-product_in_order.dto';
import { UpdateProductInOrderDto } from './dto/update-product_in_order.dto';

@Injectable()
export class ProductInOrderService {
  create(createProductInOrderDto: CreateProductInOrderDto) {
    return 'This action adds a new productInOrder';
  }

  findAll() {
    return `This action returns all productInOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInOrder`;
  }

  update(id: number, updateProductInOrderDto: UpdateProductInOrderDto) {
    return `This action updates a #${id} productInOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInOrder`;
  }
}
