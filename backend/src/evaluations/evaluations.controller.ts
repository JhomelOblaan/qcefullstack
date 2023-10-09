import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';

@Controller('evaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post()
  create(@Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationsService.create(createEvaluationDto);
  }

  @Get()
  findAll() {
    return this.evaluationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationsService.update(+id, updateEvaluationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationsService.remove(+id);
  }
 
  @Get('byStatus/:status/:evaluator_id')
  getByType(@Param('status') status: number, @Param('evaluator_id') evaluator_id: number) {
    return this.evaluationsService.getByStatus(status, evaluator_id);
  }
  @Get('check-if-exist/:evaluateeid/:evaluatorid/:ratingid/:typeid')
  checkIfExist(@Param('evaluateeid') evaluateeid: number, @Param('evaluatorid') evaluatorid: number, @Param('ratingid') ratingid: number, @Param('typeid') typeid: number) {
    return this.evaluationsService.checkIfExist(evaluateeid,evaluatorid,ratingid,typeid);
  }
  
  @Get('get-by-faculty-done/:evaluateeid')
  getByFacultyDone(@Param('evaluateeid') evaluateeid: number) {
    return this.evaluationsService.getByFacultyDone(evaluateeid);
  }

  @Get('get-faculty-by-role/:role')
  getFacultyByRole(@Param('role') role: string) {
    return this.evaluationsService.getFacultyByRole(role);
  }
  // @Get('get-by-faculty-individual-rating/:managerid/:ratingid')
  // getByFacultyDoneIndividualRating(@Param('managerid') managerid: number, @Param('ratingid') ratingid: number) {
  //   return this.evaluationsService.getByFacultyIndividualRating(managerid, ratingid);
  // }
}
