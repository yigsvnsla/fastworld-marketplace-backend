import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
