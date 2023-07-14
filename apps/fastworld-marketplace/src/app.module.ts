import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import env from '../../../common/configs/env';
import { ClientsModule } from '@nestjs/microservices';
import { AUTH_CLIENT_PROVIDER, PRODUCT_CLIENT_PROVIDER, USER_CLIENT_PROVIDER } from 'common/configs/microservices.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    AuthModule,
    ProductsModule,
    CategoriesModule,
    ClientsModule.register([
      USER_CLIENT_PROVIDER,
    ]),
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
}
