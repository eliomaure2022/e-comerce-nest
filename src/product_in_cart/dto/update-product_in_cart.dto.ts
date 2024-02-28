import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInCartDto } from './create-product_in_cart.dto';

export class UpdateProductInCartDto extends PartialType(CreateProductInCartDto) {}
