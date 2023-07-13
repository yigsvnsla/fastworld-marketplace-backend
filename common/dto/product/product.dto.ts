import {
  IsArray,
  IsBoolean,
  IsDecimal,
  IsInstance,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { CategoryDto } from '../category/category.dto';

export class ProductDto {
  @IsNotEmpty()
  @IsNumber()
  public id: number;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsDecimal()
  @IsPositive()
  public price: number;

  @IsArray()
  @IsInstance(CategoryDto)
  public categories: CategoryDto[];

  // @IsArray()
  // @IsUrl()
  // public galerry:any[]

  @IsBoolean()
  public isActive: boolean;

  constructor(partialProductDto: Partial<ProductDto>) {
    Object.assign(this, partialProductDto);
  }
}
