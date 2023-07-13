import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from '@nestjs/microservices';
import { PRODUCT_SOURCE_OPTIONS } from './database/data-source';
import { PRODUCT_CLIENT_PROVIDER } from 'common/configs/microservices.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(PRODUCT_SOURCE_OPTIONS),
    ClientsModule.register([PRODUCT_CLIENT_PROVIDER]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
