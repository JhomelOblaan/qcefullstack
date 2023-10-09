import { ApiProperty } from '@nestjs/swagger';
import { EvaluationType } from 'src/evaluation_types/entities/evaluation_type.entity';
import { Question } from 'src/questions/entities/question.entity';
import { RatingPeriod } from 'src/rating_periods/entities/rating_period.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn( 'increment', {type: 'bigint'} )
  id: number;
  // @ApiProperty()
  // @Column()
  // userevaluatorId: number;

  // @ApiProperty()
  // @Column()
  // userevaluateeId: number;

  // @ApiProperty()
  // @Column()
  // questionId: number;

  // @ApiProperty()
  // @Column()
  // rating_periodId: number;

  // @ApiProperty()
  // @Column()
  // evaluation_typeId: number;

//   @Column({type:'varchar'})  
  @ApiProperty()
  @ManyToOne(() => Question, (question) => question.scores)
  question: Question
  
  
//   @ApiProperty()
//   @ManyToOne(() => Question, (question) => question.scoresa)
//   questioneval: Question
  
  @ApiProperty()
  @ManyToOne(() => RatingPeriod, (rating_period) => rating_period.scores)
  rating_period: RatingPeriod
  
  @ApiProperty()
  @ManyToOne(() => EvaluationType, (evaluation_type) => evaluation_type.scoress)
  evaluation_type: EvaluationType
  
  @ManyToOne(() => User, (user) => user.evaluators)
  userevaluator: User
  
  
  @ManyToOne(() => User, (user) => user.evaluatee)
  userevaluatee: User
  
  @ApiProperty()
  @Column()
  eval_score: number;

}