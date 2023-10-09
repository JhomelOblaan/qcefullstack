import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';
import { Evaluation } from './entities/evaluation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoresModule } from 'src/scores/scores.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation]), ScoresModule, UsersModule],
  controllers: [EvaluationsController],
  providers: [EvaluationsService],
  exports:[EvaluationsService]
})
export class EvaluationsModule {}
