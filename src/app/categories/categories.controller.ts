import { CategoriesService } from './categories.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
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
  public async findById(
    @Param('id', ParseIntPipe) id: number,
    queryParams: QueryParamsDto,
  ) {
    return await this.categoriesService.findById(id, queryParams);
  }

  @Post()
  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  // @UseInterceptors(ClassSerializerInterceptor)
  public async create(@Body() createCategoriesDto: CreateCategoriesDto) {
    return await this.categoriesService.create(createCategoriesDto);
  }

  @Put(':id')
  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @Roles(ROLE_ENUM.Admin)
  @UseGuards(RolesGuard)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.categoriesService.delete(id);
  }
}
