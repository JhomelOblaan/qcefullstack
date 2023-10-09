import { PartialType } from '@nestjs/swagger';
import { CreateEvaluationTypeDto } from './create-evaluation_type.dto';

export class UpdateEvaluationTypeDto extends PartialType(CreateEvaluationTypeDto) {}
