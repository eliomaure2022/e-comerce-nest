import { IsInt, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  totalPrice: number;

  @IsInt()
  userId: number;
}
