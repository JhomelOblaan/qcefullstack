import { ApiProperty } from "@nestjs/swagger";

export class CreateEvaluationDto {
    @ApiProperty()
    status: boolean;
    @ApiProperty()
    userevaluatorId:number;
    @ApiProperty() 
    userevaluateeId:number;
    @ApiProperty()
    ratingPeriodId:number;
    @ApiProperty()
    evaluationTypeId:number;
}
