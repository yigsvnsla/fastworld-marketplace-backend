import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import CategoryDto from './category.dto';

export default class CreateCategoriesDto {
  @IsOptional()
  public parent?: CategoryDto;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  public name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  public description: string;

  constructor(partialCreateCategorieDto: Partial<CreateCategoriesDto>) {
    Object.assign(this, partialCreateCategorieDto);
  }
}
