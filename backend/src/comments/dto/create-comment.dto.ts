import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty()
    userevaluatorId: number;
    @ApiProperty()
    ratingPeriodId: number;
    @ApiProperty()
    userevaluateeId: number;
    @ApiProperty()
    evaluationTypeId: number;
    @ApiProperty()
    comment: string;
}
