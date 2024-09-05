import { Test, TestingModule } from '@nestjs/testing';
import { JokeTypeService } from './joke-type.service';

describe('JokeTypeService', () => {
  let service: JokeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokeTypeService],
    }).compile();

    service = module.get<JokeTypeService>(JokeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
