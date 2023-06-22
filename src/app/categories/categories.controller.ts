import { CategoriesService } from './categories.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ROLE_ENUM } from 'src/const/role.const';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import CreateCategoriesDto from './DTOs/create-categories.dto';
import { Public } from 'src/decorators/public.decorator';
import QueryParamsDto from 'src/common/dtos/query-params.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  public async findAll(@Query() queryParams: QueryParamsDto) {
    return this.categoriesService.findAll(queryParams);
  }

  // async findById(id: number): Promise<Category> {
  //   return this.categoryRepository.findOne(id);
  // }

  @Post()
  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  // @UseInterceptors(ClassSerializerInterceptor)
  public async create(@Body() createCategoriesDto: CreateCategoriesDto) {
    return await this.categoriesService.create(createCategoriesDto);
  }

  // async update(id: number, categoryData: Partial<Category>): Promise<Category> {
  //   await this.categoryRepository.update(id, categoryData);
  //   return this.findById(id);
  // }

  // async delete(id: number): Promise<void> {
  //   await this.categoryRepository.delete(id);
  // }
}
