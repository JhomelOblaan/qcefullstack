import { Module } from '@nestjs/common';
import { RatingPeriodsService } from './rating_periods.service';
import { RatingPeriodsController } from './rating_periods.controller';
import { RatingPeriod } from './entities/rating_period.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { EvaluationsModule } from 'src/evaluations/evaluations.module';

@Module({
  imports: [TypeOrmModule.forFeature([RatingPeriod]), UsersModule, EvaluationsModule],
  controllers: [RatingPeriodsController],
  providers: [RatingPeriodsService], 
  exports:[RatingPeriodsService]
})
export class RatingPeriodsModule {}
