import { Test, TestingModule } from '@nestjs/testing';
import { RatingPeriodsController } from './rating_periods.controller';
import { RatingPeriodsService } from './rating_periods.service';

describe('RatingPeriodsController', () => {
  let controller: RatingPeriodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatingPeriodsController],
      providers: [RatingPeriodsService],
    }).compile();

    controller = module.get<RatingPeriodsController>(RatingPeriodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
