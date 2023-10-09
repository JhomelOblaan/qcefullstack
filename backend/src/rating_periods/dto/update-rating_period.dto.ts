import { PartialType } from '@nestjs/swagger';
import { CreateRatingPeriodDto } from './create-rating_period.dto';

export class UpdateRatingPeriodDto extends PartialType(CreateRatingPeriodDto) {}
