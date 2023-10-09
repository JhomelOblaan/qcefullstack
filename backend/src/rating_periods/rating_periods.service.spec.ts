import { Test, TestingModule } from '@nestjs/testing';
import { RatingPeriodsService } from './rating_periods.service';

describe('RatingPeriodsService', () => {
  let service: RatingPeriodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatingPeriodsService],
    }).compile();

    service = module.get<RatingPeriodsService>(RatingPeriodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
