import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { Joke } from './entities/joke.entity';
import { JokeTypeModule } from 'src/joke-type/joke-type.module';

@Module({
  imports: [TypeOrmModule.forFeature([Joke]), JokeTypeModule],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}
