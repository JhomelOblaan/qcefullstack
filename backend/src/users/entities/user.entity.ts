
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {
 @PrimaryGeneratedColumn( 'increment', {type: 'bigint'} )
  id: number;
  

  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column({nullable: true})
  password: string;
  @Column({ default: "Student" })
  role: string;
  @Column({ default: 'default.png' })
  picture: string;

  @OneToMany(() => Evaluation, (evaluator) => evaluator.userevaluator)
  evaluators: Evaluation[]
  
  
  @OneToMany(() => Evaluation, (evaluatee) => evaluatee.userevaluatee)
  evaluatee: Evaluation[]
}