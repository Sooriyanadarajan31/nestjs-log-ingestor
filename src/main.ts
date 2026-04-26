import * as dotenv from 'dotenv';
dotenv.config(); import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { LogService } from './log/log.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Log Ingestor API')
    .setDescription('API for log ingestion and querying')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  const logsService = app.get(LogService);

  if (process.env.SEED === 'true') {
    await logsService.seed();
  }

  await app.listen(3000);

  console.log(`🚀 Server running on http://localhost:3000`);
  console.log(`📄 Swagger docs available at http://localhost:3000/api`);
}

bootstrap();