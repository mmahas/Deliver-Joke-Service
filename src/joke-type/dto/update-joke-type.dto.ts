import { PartialType } from '@nestjs/mapped-types';
import { CreateJokeTypeDto } from './create-joke-type.dto';

export class UpdateJokeTypeDto extends PartialType(CreateJokeTypeDto) {}
