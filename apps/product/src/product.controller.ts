import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import ProductService from './product.service';
import { CreateProductDto } from 'common/dto/product/create-product.dto';
import { QueryParamsDto } from 'common/dto/pagination/query-params.dto';
import { UpdateProductDto } from 'common/dto/product/update-product.dto';
import { EventPattern } from '@nestjs/microservices';
import { PRODUCTS_PATTERN } from 'common/enum/actions/actions-products.enum';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('products')
export default class ProductsController {
  constructor(private productsService: ProductService) {}

  @EventPattern(PRODUCTS_PATTERN.TEST)
  public async test() {
    return "si jalaxddddd"
  }
  
  @EventPattern(PRODUCTS_PATTERN.GET_ALL)
  public async findAllProducts(@Query() queryParams: QueryParamsDto) {
    return await this.productsService.findAllProducts(queryParams);
  }

  @EventPattern(PRODUCTS_PATTERN.GET)
  public async findProduct(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryParams: QueryParamsDto,
  ) {
    return await this.productsService.findProduct(id, queryParams);
  }

  @EventPattern(PRODUCTS_PATTERN.CREATE)
  public async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct(createProductDto);
  }

  @EventPattern(PRODUCTS_PATTERN.UPDATE)
  public async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedProductDto: UpdateProductDto,
  ) {
    return await this.productsService.updateProduct(id, updatedProductDto);
  }

  @EventPattern(PRODUCTS_PATTERN.DELETE)
  public async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.deleteProduct(id);
  }
}