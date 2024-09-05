import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJokeTypeDto {
  @IsString()
  @IsNotEmpty()
  type: string;
}
