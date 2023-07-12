import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { USER_CLIENT_PROVIDER } from 'common/configs/microservices.config';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    USER_CLIENT_PROVIDER
  );
  await app.listen();
}
bootstrap();
