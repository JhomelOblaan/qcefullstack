import { ApiProperty } from '@nestjs/swagger';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Score } from 'src/scores/entities/score.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class EvaluationType {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  description: string;
  
  @OneToMany(() => Score, (score) => score.evaluation_type)
  scoress: Score[]
  
  @OneToMany(() => Evaluation, (evaluation) => evaluation.evaluation_type)
  evaluation: Evaluation[]
  
}
