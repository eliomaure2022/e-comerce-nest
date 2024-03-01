import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('E-comerce')
    .setDescription('E-comerce creado en Nest.js')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('product')
    .addTag('cart')
    .addTag('order')
    .addTag('product-in-cart')
    .addTag('product-in-order')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
