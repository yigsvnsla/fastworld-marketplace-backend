import { Type } from 'class-transformer';
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
} from 'class-validator';
// import Category from '../../categories/entitys/category.entity';
import CategoryDto from '../DTOs/product.dto';
export default class UpdateProductDto {
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
  @Type(() => Array<CategoryDto>)
  public categories: CategoryDto[];

  // public galerry:any[]
}
