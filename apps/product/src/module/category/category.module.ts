import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../../entitys/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service'
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category
    ])
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoriesModule { }
