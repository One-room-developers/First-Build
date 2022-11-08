import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,               // decorator 형식에 없는 데이터를 거름
      forbidNonWhitelisted: true,    // 이상한 값이 오면 리퀘스트 자체를 막음
      transform: true,               // 받은 데이터 자동 형변환
    }), 
  );
  await app.listen(3000);
}

bootstrap();
