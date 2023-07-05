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
import UpdateCategoryDto from './DTOs/update-category.dto';

// todo: revisa los decoradores faltantes
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  public async findAll(@Query() queryParams: QueryParamsDto) {
    return await this.categoriesService.findAll(queryParams);
  }

  @Get(':id')
  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  public async findById(id: number, queryParams: QueryParamsDto) {
    return await this.categoriesService.findById(id, queryParams);
  }

  @Post()
  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  // @UseInterceptors(ClassSerializerInterceptor)
  public async create(@Body() createCategoriesDto: CreateCategoriesDto) {
    return await this.categoriesService.create(createCategoriesDto);
  }

  public async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesService.update(id, updateCategoryDto);
  }

  public async delete(id: number) {
    return await this.categoriesService.delete(id);
  }
}
