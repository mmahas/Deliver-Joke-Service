import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Joke } from 'src/joke/entities/joke.entity';

@Entity('joke_types')
export class JokeType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  type: string;
}
