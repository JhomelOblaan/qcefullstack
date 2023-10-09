import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationTypesService } from './evaluation_types.service';

describe('EvaluationTypesService', () => {
  let service: EvaluationTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluationTypesService],
    }).compile();

    service = module.get<EvaluationTypesService>(EvaluationTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
