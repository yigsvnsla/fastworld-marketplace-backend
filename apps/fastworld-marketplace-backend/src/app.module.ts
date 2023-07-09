import { CategoriesModule } from './app/categories/categories.module';
import ProductsModule  from './app/products/products.module';
import { DATA_SOURCE_OPTIONS } from './database/data-source';
import AuthModule from './app/auth/auth.module';
import UsersModule from './app/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import { Module } from '@nestjs/common';
import AppService from './app.service';
import { DataSource } from 'typeorm';
import env from './configs/env';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
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
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
