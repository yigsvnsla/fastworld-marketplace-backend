import env from './configs/env';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DATA_SOURCE_OPTIONS } from './database/data-source';
import AuthModule from './app/auth/auth.module';
import UsersModule from './app/users/users.module';
import ProductsModule from './app/products/products.module';
import CategoriesModule from './app/categories/categories.module';
import AppController from './app.controller';
import AppService from './app.service';
import { ImagesModule } from './app/images/images.module';
import { IMAGES_SERVICE } from './configs/IMAGES_SERVICE.config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ImagesModule,
    ProductsModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    TypeOrmModule.forRoot(DATA_SOURCE_OPTIONS),
    ConfigModule.forRoot({
      cache: true,
      load: [env],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //IMAGES_SERVICE,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
