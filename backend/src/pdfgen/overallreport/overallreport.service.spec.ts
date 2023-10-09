import { Test, TestingModule } from '@nestjs/testing';
import { OverallreportService } from './overallreport.service';

describe('OverallreportService', () => {
  let service: OverallreportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OverallreportService],
    }).compile();

    service = module.get<OverallreportService>(OverallreportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
