import { Controller, Get, Post, Body } from '@nestjs/common';
import { JokeTypeService } from './joke-type.service';
import { CreateJokeTypeDto } from './dto/create-joke-type.dto';

@Controller('joke-type')
export class JokeTypeController {
  constructor(private readonly jokeTypeService: JokeTypeService) {}

  @Post()
  create(@Body() createJokeTypeDto: CreateJokeTypeDto) {
    return this.jokeTypeService.create(createJokeTypeDto);
  }

  @Get()
  findAll() {
    return this.jokeTypeService.findAll();
  }
}
