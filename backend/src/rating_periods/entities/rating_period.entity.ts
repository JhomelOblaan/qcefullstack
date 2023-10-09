import { ApiProperty } from '@nestjs/swagger';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Score } from 'src/scores/entities/score.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class RatingPeriod {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  rating_period: string;

  @OneToMany(() => Score, (score) => score.rating_period)
  scores: Score[]

  @OneToMany(() => Evaluation, (evaluation) => evaluation.rating_period)
  evaluation: Evaluation[]

}