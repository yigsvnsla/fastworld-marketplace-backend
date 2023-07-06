import { Injectable } from '@nestjs/common';
import Product from './entitys/products.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import ProductDto from './DTOs/product.dto';
import CreateProductDto from './DTOs/create-product.dto';
import QueryParamsDto from 'src/common/dtos/query-params.dto';
import UpdateProductDto from './DTOs/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  public async findAllProducts(queryParams: QueryParamsDto) {
    const products = await this.productRepo.find(queryParams);
    return products.map((p) => new ProductDto(p));
  }

  public async findProduct(id: number, queryParams: QueryParamsDto) {
    // todo: como quieres manejar el where?
    const product = await this.productRepo.findOne({
      where: { id },
      ...queryParams,
    });

    return new ProductDto(product);
  }

  public async createProduct(createProductDto: CreateProductDto) {
    const product = await this.productRepo.findOne({
      where: { name: createProductDto.name },
    });

    if (product) {
      throw new Error('product has exists');
    }

    const newProduct = this.productRepo.create(createProductDto);
    const createdProduct = await this.productRepo.save(newProduct);

    return new ProductDto(createdProduct);
  }

  public async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOne({ where: { id } });

    const updatedProduct = await this.productRepo.save({
      ...product,
      ...updateProductDto,
    });

    return new ProductDto(updatedProduct);
  }

  public async deleteProduct(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });

    const deleteProduct = await this.productRepo.save({
      ...product,
      isActive: false,
    });

    return deleteProduct;
  }
}
