import { CategoriesModule } from './app/categories/categories.module';
import ProductsModule from './app/products/products.module';
import { DATA_SOURCE_OPTIONS } from './database/data-source';
import UsersModule from './app/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import { Module } from '@nestjs/common';
import AppService from './app.service';
import { DataSource } from 'typeorm';
import env from '../../../common/configs/env';
import { ClientsModule } from '@nestjs/microservices';
import { AUTH_CLIENT_PROVIDER } from 'common/configs/microservices.config';

@Module({
  imports: [
    // ProductsModule,
    // CategoriesModule,
    // ClientsModule.register([
    //   AUTH_PROVIDER
    // ]),
    // TypeOrmModule.forRoot(DATA_SOURCE_OPTIONS),
    // ConfigModule.forRoot({
    //   cache: true,
    //   load: [env],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
