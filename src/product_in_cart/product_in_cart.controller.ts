import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { ProductInCartService } from './product_in_cart.service';
//import { CreateProductInCartDto } from './dto/create-product_in_cart.dto';
//import { UpdateProductInCartDto } from './dto/update-product_in_cart.dto';

@Controller('product-in-cart')
export class ProductInCartController {
  constructor(private readonly productInCartService: ProductInCartService) {}

  // @Post()
  // create(@Body() createProductInCartDto: CreateProductInCartDto) {
  //   return this.productInCartService.create(createProductInCartDto);
  // }

  @Get()
  findAll() {
    return this.productInCartService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productInCartService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProductInCartDto: UpdateProductInCartDto
  // ) {
  //   return this.productInCartService.update(+id, updateProductInCartDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productInCartService.remove(+id);
  // }
}
