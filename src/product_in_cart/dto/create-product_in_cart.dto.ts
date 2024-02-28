import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class CreateProductInCartDto {
  @IsInt()
  cartId: number;

  @IsInt()
  productId: number;

  @IsInt()
  quantity: number;

  @IsNumber()
  price: number;

  @IsBoolean()
  status: boolean;
}
