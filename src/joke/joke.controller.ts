import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post()
  async create(@Body() createJokeDto: CreateJokeDto) {
    const { content, type } = createJokeDto;
    return this.jokeService.create(content, type);
  }

  @Get()
  findAll() {
    return this.jokeService.findAll();
  }

  @Get('/type/:type')
  findByType(@Param('type') type: string) {
    return this.jokeService.findByType(type);
  }
}
