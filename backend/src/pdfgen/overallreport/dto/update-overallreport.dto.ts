import { PartialType } from '@nestjs/swagger';
import { CreateOverallreportDto } from './create-overallreport.dto';

export class UpdateOverallreportDto extends PartialType(CreateOverallreportDto) {}
