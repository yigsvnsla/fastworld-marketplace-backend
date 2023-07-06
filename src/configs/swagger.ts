import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();

const swaggerSetup = {};

// const 


export const setup = (app:INestApplication<any>) => {
  const document = SwaggerModule.createDocument(app, config);
  console.log(document)
  SwaggerModule.setup('api', app, document, swaggerSetup);
}

export default {
  setup
}