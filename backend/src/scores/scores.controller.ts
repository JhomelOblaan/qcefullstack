import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoresService.create(createScoreDto);
  }

  @Get()
  findAll() {
    return this.scoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
    return this.scoresService.update(+id, updateScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoresService.remove(+id);
  }

//  checkIfExist(qid: number,evaluatorid: number,evaluateeid: number,ratingid: number,typeid: number){
   
  @Get('check-if-exist/:qid/:evaluatorid/:evaluateeid/:ratingid/:typeid')
  checkIfExist(@Param('qid') qid: number, @Param('evaluatorid') evaluatorid: number, @Param('evaluateeid') evaluateeid: number, @Param('ratingid') ratingid: number, @Param('typeid') typeid: number) {
    return this.scoresService.checkIfExist(qid,evaluatorid,evaluateeid,ratingid,typeid);
  }
  @Get('review-all-scores/:evaluatorid/:evaluateeid/:ratingid/:typeid')
  reviewAllScores(@Param('evaluatorid') evaluatorid: number, @Param('evaluateeid') evaluateeid: number, @Param('ratingid') ratingid: number, @Param('typeid') typeid: number) {
    return this.scoresService.reviewAllScores(evaluatorid,evaluateeid,ratingid,typeid);
  }
  
  @Get('get-percentage-by-type/:type/:evaluatorid/:evaluateeid/:ratingid/:typeid')
  getPercentageByType(@Param('type') type: string,@Param('evaluatorid') evaluatorid: number, @Param('evaluateeid') evaluateeid: number, @Param('ratingid') ratingid: number, @Param('typeid') typeid: number) {
    return this.scoresService.getPercentageByType(type,evaluatorid,evaluateeid,ratingid,typeid);
  }
  @Get('get-percentage-by-individual-rating/:type/:evaluateeid/:ratingid')
  getPercentageByIndividualRating(@Param('type') type: string,@Param('evaluateeid') evaluateeid: number, @Param('ratingid') ratingid: number) {
    return this.scoresService.getPercentageByIndividualRating(type,evaluateeid,ratingid);
  }
}
