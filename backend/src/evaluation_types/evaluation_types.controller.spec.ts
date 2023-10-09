import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationTypesController } from './evaluation_types.controller';
import { EvaluationTypesService } from './evaluation_types.service';

describe('EvaluationTypesController', () => {
  let controller: EvaluationTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluationTypesController],
      providers: [EvaluationTypesService],
    }).compile();

    controller = module.get<EvaluationTypesController>(EvaluationTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
