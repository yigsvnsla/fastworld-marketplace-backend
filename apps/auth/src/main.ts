import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions} from "@nestjs/microservices";
import { AUTH_PROVIDER } from 'common/configs/microservices.config';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    AUTH_PROVIDER
  );    
  await app.listen();
}
bootstrap();
