import { Injectable } from '@nestjs/common';
import { CreateJokeTypeDto } from './dto/create-joke-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JokeType } from './entities/joke-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JokeTypeService {
  constructor(
    @InjectRepository(JokeType)
    private readonly jokeTypeRepository: Repository<JokeType>,
  ) {}

  async create(createJokeTypeDto: CreateJokeTypeDto) {
    const jokeType = this.jokeTypeRepository.create(createJokeTypeDto);
    return this.jokeTypeRepository.save(jokeType);
  }

  findAll() {
    return this.jokeTypeRepository.find();
  }
}
