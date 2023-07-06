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
import CategoryDto from 'src/app/categories/DTOs/category.dto';
import Product from '../entitys/products.entity';
import { Category } from 'src/app/categories/entitys/category.entity';

export default class ProductDto implements Product {
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
  public categories: Category[];

  // @IsArray()
  // @IsUrl()
  // public galerry:any[]

  @IsBoolean()
  public isActive: boolean;

  constructor(partialProductDto: Partial<Product>) {
    Object.assign(this, partialProductDto);
  }
}
