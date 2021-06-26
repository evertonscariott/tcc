import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('tcc')
    .setDescription('tcc api')
    .setVersion(process.env.npm_package_version)
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(`${process.env.BASEPATH}/docs`, app, document);
  app.enableCors();
  app.setGlobalPrefix(process.env.BASEPATH);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.API_PORT);
}
bootstrap();
