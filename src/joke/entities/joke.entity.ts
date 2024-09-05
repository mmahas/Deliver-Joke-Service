import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { JokeType } from 'src/joke-type/entities/joke-type.entity';

@Entity('jokes')
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  type: string;
}
