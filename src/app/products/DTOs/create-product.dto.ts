import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Category } from 'src/app/categories/entitys/category.entity';

export default class CreateProductDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsOptional()
  @IsNotEmpty()
  @IsArray()
  @Type(() => Array<Category>)
  public categories: Category[];

  // public galerry:any[]
}
