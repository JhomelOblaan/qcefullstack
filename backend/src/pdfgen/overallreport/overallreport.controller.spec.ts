import { Test, TestingModule } from '@nestjs/testing';
import { OverallreportController } from './overallreport.controller';
import { OverallreportService } from './overallreport.service';

describe('OverallreportController', () => {
  let controller: OverallreportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OverallreportController],
      providers: [OverallreportService],
    }).compile();

    controller = module.get<OverallreportController>(OverallreportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
