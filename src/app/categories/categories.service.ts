import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Category from './entitys/category.entity';
import QueryParamsDto from '../../common/dtos/query-params.dto';
import CreateCategoriesDto from './DTOs/create-categories.dto';
import CategoryDto from './DTOs/category.dto';
import PageMetaDto from '../../common/dtos/page-meta.dto';
import PageDto from '../../common/dtos/page.dto';
import UpdateCategoryDto from './DTOs/update-category.dto';

@Injectable()
export default class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoriesRepo: Repository<Category>,
  ) { }

  public async findAll(queryParams: QueryParamsDto) {
    const [entities, count] = await Promise.all([
      this.categoriesRepo.find(queryParams),
      this.categoriesRepo.count(queryParams),
    ]);

    const pageMetaDto = new PageMetaDto({
      itemCount: count,
      pageOptionsDto: queryParams,
    });

    return new PageDto(entities, pageMetaDto);
  }

  public async findById(id: number, queryParams: QueryParamsDto) {
    const category = await this.categoriesRepo.findOne({
      ...queryParams,
      where: { id },
    });

    return category;
  }

  public async create(category: CreateCategoriesDto) {

    console.log(category);
    return category
    const findNewCategory = await this.categoriesRepo.findOneBy(category);
    if (findNewCategory) throw new NotAcceptableException('Category Already Exist');
    const createCategory = this.categoriesRepo.create(category);
    const createdCategory = await this.categoriesRepo.save(createCategory);
    return new CategoryDto(createdCategory);
  }

  public async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoriesRepo.findOne({ where: { id } });
    const updatedCategory = await this.categoriesRepo.save({
      ...category,
      ...updateCategoryDto,
    });

    return new CategoryDto(updatedCategory);
  }

  public async delete(id: number) {
    const category = await this.categoriesRepo.findOne({ where: { id } });
    const updatedCategory = await this.categoriesRepo.save({
      ...category,
      isActive: false,
    });

    return new CategoryDto(updatedCategory);
  }
}
