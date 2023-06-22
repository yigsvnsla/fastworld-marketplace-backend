import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Category } from './entitys/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import QueryParamsDto from 'src/common/dtos/query-params.dto';
import CreateCategoriesDto from './DTOs/create-categories.dto';
import CategoryDto from './DTOs/category.dto';
import { PageMetaDto } from 'src/common/dtos/page-meta.dto';
import { PageDto } from 'src/common/dtos/page.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoriesRepo: Repository<Category>,
  ) {}

  public async create(category: CreateCategoriesDto) {
    const findNewCategory = await this.categoriesRepo.findOneBy(category);
    if (findNewCategory) {
      throw new NotAcceptableException('Category Already Exist');
    }
    const createCategory = this.categoriesRepo.create(category);
    const createdCategory = await this.categoriesRepo.save(createCategory);
    return new CategoryDto(createdCategory);
  }

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
}
