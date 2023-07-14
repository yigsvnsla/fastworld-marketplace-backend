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
import { Roles } from '../../../../../decorators/role.decorator';
import { Public } from '../../../../../decorators/public.decorator';
import { RolesGuard } from '../../../../../guards/roles.guard';
import { CategoryService } from './category.service';
import { QueryParamsDto } from 'common/dto/pagination/query-params.dto';
import { USER_ROLE } from 'common/enum/roles/user-role.enum';
import { CreateCategoriesDto } from 'common/dto/category/create-category.dto';
import { UpdateCategoryDto } from 'common/dto/category/update-category.dto';

// todo: revisa los decoradores faltantes
@Controller('categories')
export class CategoryController {
  constructor(
    private categoriesService: CategoryService
  ) { }

  @Get()
  @Public()
  @UseInterceptors(ClassSerializerInterceptor)
  public async findAll(
    @Query() queryParams: QueryParamsDto
  ) {
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
  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  // @UseInterceptors(ClassSerializerInterceptor)
  public async create(
    @Body() createCategoriesDto: CreateCategoriesDto
  ) {
    return await this.categoriesService.create(createCategoriesDto);
  }

  @Put(':id')
  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @Roles(USER_ROLE.Admin)
  @UseGuards(RolesGuard)
  public async delete(
    @Param('id', ParseIntPipe) id: number
  ) {
    return await this.categoriesService.delete(id);
  }
}
