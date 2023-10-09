import { ApiProperty } from '@nestjs/swagger';
import { Score } from 'src/scores/entities/score.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(() => Score, (score) => score.question)
  scores: Score[]
  
  // @OneToMany(() => Score, (score) => score.questioneval)
  // scoresa: Score[]
  
}