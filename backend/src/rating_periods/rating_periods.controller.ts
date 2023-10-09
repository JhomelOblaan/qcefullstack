import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatingPeriodsService } from './rating_periods.service';
import { CreateRatingPeriodDto } from './dto/create-rating_period.dto';
import { UpdateRatingPeriodDto } from './dto/update-rating_period.dto';

@Controller('rating-periods')
export class RatingPeriodsController {
  constructor(private readonly ratingPeriodsService: RatingPeriodsService) {}

  @Post()
  create(@Body() createRatingPeriodDto: CreateRatingPeriodDto) {
    return this.ratingPeriodsService.create(createRatingPeriodDto);
  }
  @Get('getLatest')
  getLatest() {
    return this.ratingPeriodsService.getLatest();
  }
  @Get()
  findAll() {
    return this.ratingPeriodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingPeriodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatingPeriodDto: UpdateRatingPeriodDto) {
    return this.ratingPeriodsService.update(+id, updateRatingPeriodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingPeriodsService.remove(+id);
  }
}
