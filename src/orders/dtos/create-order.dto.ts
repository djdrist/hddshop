import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmail,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  zipcode: string;
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  payment: string;
  @IsNotEmpty()
  @IsNumber()
  total: number;
  @IsNotEmpty()
  @IsUUID()
  products: {
    id: string;
    quantity: number;
  }[];
}
