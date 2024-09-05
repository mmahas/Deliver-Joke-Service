import { Test, TestingModule } from '@nestjs/testing';
import { JokeTypeController } from './joke-type.controller';
import { JokeTypeService } from './joke-type.service';

describe('JokeTypeController', () => {
  let controller: JokeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokeTypeController],
      providers: [JokeTypeService],
    }).compile();

    controller = module.get<JokeTypeController>(JokeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
