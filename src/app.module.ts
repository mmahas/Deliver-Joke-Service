import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeTypeModule } from './joke-type/joke-type.module';
import { JokeType } from './joke-type/entities/joke-type.entity';
import { Joke } from './joke/entities/joke.entity';
import { JokeModule } from './joke/joke.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Joke, JokeType],
      synchronize: true,
    }),
    JokeModule,
    JokeTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
