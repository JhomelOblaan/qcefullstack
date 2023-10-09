import { ApiProperty } from "@nestjs/swagger";
import { EvaluationType } from "src/evaluation_types/entities/evaluation_type.entity";
import { RatingPeriod } from "src/rating_periods/entities/rating_period.entity";
import { User } from "src/users/entities/user.entity";
import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn( 'increment', {type: 'bigint'} )
    id: number;

    
    @ApiProperty()
    @ManyToOne(() => RatingPeriod, (rating_period) => rating_period.scores)
    rating_period: RatingPeriod
    
    
    @ManyToOne(() => User, (user) => user.evaluators)
    userevaluator: User
    
    
    @ManyToOne(() => User, (user) => user.evaluatee)
    userevaluatee: User
    @ApiProperty()
    
    @ManyToOne(() => EvaluationType, (evaluation_type) => evaluation_type.scoress)
    evaluation_type: EvaluationType
    
    @ApiProperty()
    // @Column({ type: "varchar",{ length: 500}, nullable: true })
    @Column("varchar", { length: 500 })
    comment: string; 
}
