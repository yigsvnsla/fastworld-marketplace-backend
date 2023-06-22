import { IsNotEmpty, IsNumber } from 'class-validator';
import CategoryDto from 'src/app/categories/DTOs/category.dto';

export default class ProductDto {
  @IsNotEmpty()
  @IsNumber()
  public id: number;

  public name: string;

  public description: string;

  public price: string;

  public categories: CategoryDto[];

  // public galerry:any[]

  constructor(partialProductDto: Partial<ProductDto>) {
    Object.assign(this, partialProductDto);
  }
}
