import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';
import { PRODUCT_CLIENT_PROVIDER } from 'common/configs/microservices.config';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,
    PRODUCT_CLIENT_PROVIDER
  );    
  await app.listen();
}
bootstrap();
