import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationTypesService } from './evaluation_types.service';
import { CreateEvaluationTypeDto } from './dto/create-evaluation_type.dto';
import { UpdateEvaluationTypeDto } from './dto/update-evaluation_type.dto';

@Controller('evaluation-types')
export class EvaluationTypesController {
  constructor(private readonly evaluationTypesService: EvaluationTypesService) {}

  @Post()
  create(@Body() createEvaluationTypeDto: CreateEvaluationTypeDto) {
    return this.evaluationTypesService.create(createEvaluationTypeDto);
  }

  @Get()
  findAll() {
    return this.evaluationTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationTypeDto: UpdateEvaluationTypeDto) {
    return this.evaluationTypesService.update(+id, updateEvaluationTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationTypesService.remove(+id);
  }
}
