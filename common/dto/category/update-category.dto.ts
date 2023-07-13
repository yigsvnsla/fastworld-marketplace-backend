import { Type, Transform } from 'class-transformer';
import { IsOptional, IsNotEmpty, IsString } from 'class-validator';
import { CategoryDto } from './category.dto';

export class UpdateCategoryDto {
  @IsOptional()
  @Type(() => CategoryDto)
  public parent?: Partial<CategoryDto>;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  public name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  public description: string;
}
