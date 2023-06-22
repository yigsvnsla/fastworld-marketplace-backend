import { ProductsModule } from './app/products/products.module';
import { AuthModule } from './app/auth/auth.module';
import env from './configs/env';
import UsersModule from './app/users/users.module';
import AppController from './app.controller';
import AppService from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE_OPTIONS } from './database/data-source';
import { CategoriesModule } from './app/categories/categories.module';

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
