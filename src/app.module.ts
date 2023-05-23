/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import AppController from './app.controller';
import AppService from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import env from './configs/env';
import { DATA_SOURCE_OPTIONS} from './database/data-source';


@Module({
  imports: [
    UsersModule,
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
