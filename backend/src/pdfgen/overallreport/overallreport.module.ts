import { Module } from '@nestjs/common';
import { OverallreportService } from './overallreport.service';
import { OverallreportController } from './overallreport.controller';
import { UsersModule } from 'src/users/users.module';
import { EvaluationsModule } from 'src/evaluations/evaluations.module';

@Module({
  imports: [UsersModule, EvaluationsModule],
  controllers: [OverallreportController],
  providers: [OverallreportService]
})
export class OverallreportModule {}
