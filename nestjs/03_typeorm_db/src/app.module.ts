// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Menu } from './entities/menu.entity';
import { Category } from './entities/category.entity';
import { Subcategory } from './entities/subcategory.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 이 옵션을 통해 전체 모듈에서 ConfigModule을 사용할 수 있습니다.
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),
        entities: [Menu, Category, Subcategory],
        synchronize: true, // 개발 환경에서만 사용하세요.
      })
    }),
    TypeOrmModule.forFeature([Menu, Category, Subcategory]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
