import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEvaluationTypeDto } from './dto/create-evaluation_type.dto';
import { UpdateEvaluationTypeDto } from './dto/update-evaluation_type.dto';
import { EvaluationType } from './entities/evaluation_type.entity';

@Injectable()
export class EvaluationTypesService {
  constructor(
    @InjectRepository(EvaluationType)
    private questionRepository: Repository<EvaluationType>,
  ) {}

  create(createEvaluationTypeDto: CreateEvaluationTypeDto) {
    return this.questionRepository.save(createEvaluationTypeDto);
  }

  findAll() {
    return this.questionRepository.find();
  }

  findOne(id: number) {
    return this.questionRepository.findOne({where: {id: id}});    
  }

  update(id: number, updateEvaluationTypeDto: UpdateEvaluationTypeDto) {
    return this.questionRepository.update(id, updateEvaluationTypeDto);
  }

  remove(id: number) {
    return this.questionRepository.delete(id);
  }
}
