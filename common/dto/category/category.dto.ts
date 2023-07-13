import { Exclude, Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  public id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public description: string;

  @Exclude()
  @IsOptional()
  @ValidateNested()
  public parent: Partial<CategoryDto>;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  public children: Partial<CategoryDto[]>;

  // @ValidateNested()
  // @Type(() => ProductDto)
  // public product: ProductDto;

  constructor(partialCategoryDto: Partial<CategoryDto>) {
    Object.assign(this, partialCategoryDto);
  }
}
