import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import CategoryDto from '../../categories/DTOs/category.dto';

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
  @Type(() => Array<CategoryDto>)
  public categories: CategoryDto[];

  // public galerry:any[]
}
