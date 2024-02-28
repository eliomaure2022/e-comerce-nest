import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsInt()
  availableQty: number;

  @IsString()
  imageUrl: string;

  @IsInt()
  userId: number;
}
