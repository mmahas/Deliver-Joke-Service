import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokeService {
  constructor(
    @InjectRepository(Joke)
    private readonly jokeRepository: Repository<Joke>,
  ) {}

  async create(content: string, type: string) {
    const joke = this.jokeRepository.create({ content, type });
    return this.jokeRepository.save(joke);
  }

  findAll() {
    return this.jokeRepository.find();
  }

  findByType(type: string): Promise<Joke[]> {
    return this.jokeRepository.find({
      where: {
        type: type,
      },
    });
  }
}
