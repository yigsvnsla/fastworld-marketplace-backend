import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateCategoriesDto } from 'common/dto/category/create-category.dto';
import { UpdateCategoryDto } from 'common/dto/category/update-category.dto';
import { QueryParamsDto } from 'common/dto/pagination/query-params.dto';

@Injectable()
export class CategoriesService {
  constructor(
  ) {}

  public async findAll(queryParams: QueryParamsDto) {
    // const [entities, count] = await Promise.all([
    //   this.categoriesRepo.find(queryParams),
    //   this.categoriesRepo.count(queryParams),
    // ]);
    // const pageMetaDto = new PageMetaDto({
    //   itemCount: count,
    //   pageOptionsDto: queryParams,
    // });
    // return new PageDto(entities, pageMetaDto);
  }

  public async findById(id, queryParams: QueryParamsDto) {
    // const category = await this.categoriesRepo.findOne({
    //   ...queryParams,
    //   where: { id },
    // });
    // return category;
  }

  public async create(category: CreateCategoriesDto) {
    // const findNewCategory = await this.categoriesRepo.findOneBy(category);
    // if (findNewCategory) throw new NotAcceptableException('Category Already Exist');
    // const createCategory = this.categoriesRepo.create(category);
    // const createdCategory = await this.categoriesRepo.save(createCategory);
    // return new CategoryDto(createdCategory);
  }

  public async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    // const category = await this.categoriesRepo.findOne({ where: { id } });
    // const updatedCategory = await this.categoriesRepo.save({
    //   ...category,
    //   ...updateCategoryDto,
    // });
    // return new CategoryDto(updatedCategory);
  }

  public async delete(id: number) {
    // const category = await this.categoriesRepo.findOne({ where: { id } });
    // const updatedCategory = await this.categoriesRepo.save({
    //   ...category,
    //   isActive: false,
    // });
    // return new CategoryDto(updatedCategory);
  }
}
