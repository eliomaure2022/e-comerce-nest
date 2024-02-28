import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class CreateProductInOrderDto {
  @IsInt()
  cartId: number;

  @IsInt()
  orderId: number;

  @IsInt()
  productId: number;

  @IsInt()
  quantity: number;

  @IsNumber()
  price: number;

  @IsBoolean()
  status: boolean;
}
