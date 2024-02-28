import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  totalPrice: number;

  @IsInt()
  userId: number;

  @IsBoolean()
  status: boolean;
}
