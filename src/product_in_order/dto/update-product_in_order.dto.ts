import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInOrderDto } from './create-product_in_order.dto';

export class UpdateProductInOrderDto extends PartialType(CreateProductInOrderDto) {}
