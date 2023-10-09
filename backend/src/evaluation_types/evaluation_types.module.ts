import { Module } from '@nestjs/common';
import { EvaluationTypesService } from './evaluation_types.service';
import { EvaluationTypesController } from './evaluation_types.controller';
import { EvaluationType } from './entities/evaluation_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluationType])],
  controllers: [EvaluationTypesController],
  providers: [EvaluationTypesService]
})
export class EvaluationTypesModule {}
