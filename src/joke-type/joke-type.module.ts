import { Module } from '@nestjs/common';
import { JokeTypeService } from './joke-type.service';
import { JokeTypeController } from './joke-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeType } from './entities/joke-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JokeType])],
  controllers: [JokeTypeController],
  providers: [JokeTypeService],
  exports: [JokeTypeService]
})
export class JokeTypeModule {}
