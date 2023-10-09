import { ApiProperty } from '@nestjs/swagger';
import { EvaluationType } from 'src/evaluation_types/entities/evaluation_type.entity';
import { Question } from 'src/questions/entities/question.entity';
import { RatingPeriod } from 'src/rating_periods/entities/rating_period.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn( 'increment', {type: 'bigint'} )
  id: number;
  
  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.evaluators)
  userevaluator: User
  
  
  @ManyToOne(() => User, (user) => user.evaluatee)
  userevaluatee: User
  
  @ManyToOne(() => RatingPeriod, (rating_period) => rating_period.evaluation)
  rating_period: RatingPeriod
  
  @ManyToOne(() => EvaluationType, (evaluation_type) => evaluation_type.evaluation)
  evaluation_type: EvaluationType
  
  @Column({ default: false })
  status: boolean;
  
}