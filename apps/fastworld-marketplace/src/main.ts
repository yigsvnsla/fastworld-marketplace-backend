import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { log } from 'console';
import { ValidationPipe } from '@nestjs/common';
import ConfigSwagger from '../../../common/configs/swagger'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(morgan('tiny'));
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  // const config = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addTag('cats')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  // const configService = app.get(ConfigService);
  // const port = configService.get('app.port');
    
  await app.listen(3500);
  log(`Server Running in to port:${3500}`);
}
bootstrap();
