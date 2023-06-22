import ProductDto from './product.dto';

export default class CreateProductDto extends ProductDto {
  constructor(partialCreateProductDto: Partial<CreateProductDto>) {
    super(partialCreateProductDto);
    // Object.assign(this, partialCreateCategorieDto);
  }
}
