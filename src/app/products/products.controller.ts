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
import { ProductService } from './products.service';
import CreateProductDto from './DTOs/create-product.dto';
import QueryParamsDto from 'src/common/dtos/query-params.dto';
import UpdateProductDto from './DTOs/update-product.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  @Get()
  public async findAllProducts(@Query() queryParams: QueryParamsDto) {
    return await this.productsService.findAllProducts(queryParams);
  }

  @Get(':id')
  public async findProduct(
    @Param('id', ParseIntPipe) id: number,
    @Query() queryParams: QueryParamsDto,
  ) {
    return await this.productsService.findProduct(id, queryParams);
  }

  @Post()
  public async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct(createProductDto);
  }

  @Put(':id')
  public async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedProductDto: UpdateProductDto,
  ) {
    return await this.productsService.updateProduct(id, updatedProductDto);
  }

  @Delete(':id')
  public async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.deleteProduct(id);
  }
}
