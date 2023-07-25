import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import CategoryDto from './category.dto';

export default class  CreateCategoriesDto {
  @IsOptional()
  @Type(() => CategoryDto)
  public parent?: Partial<CategoryDto>;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  public name: string;

  // @IsDefined()
  // @IsNotEmpty()
  // @IsString()
  // @Transform(({ value }) => value.toLowerCase())
  // public description: string;
}
