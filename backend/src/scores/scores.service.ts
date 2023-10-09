import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/questions/entities/question.entity';
import { Repository } from 'typeorm';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { Score } from './entities/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>,
  ) {}

async  create(createScoreDto: CreateScoreDto) {
    // return this.scoreRepository.upsert({id: 23,eval_score : 4},['eval_score']);
    const scores = await this.scoreRepository
    .createQueryBuilder()
    .insert()
    .into(Score)
    .values([
        createScoreDto
    ])
    .execute()
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    // .getMany();
    return createScoreDto;
  }

  async findAll() {
    const scores = await this.scoreRepository
    .createQueryBuilder("scores")
    .leftJoinAndSelect("scores.userevaluator", "evaluator")
    .leftJoinAndSelect("scores.userevaluatee", "evaluatee")
    .leftJoinAndSelect("scores.rating_period", "rating")
    .leftJoinAndSelect("scores.evaluation_type", "type")
    .leftJoinAndSelect("scores.question", "question")
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    .getMany();
    return scores;

    // return this.scoreRepository.find();
  }

  findOne(id: number) {
    return this.scoreRepository.findOne({where: {id: id}});
  }
 
 async  checkIfExist(qid: number,evaluatorid: number,evaluateeid: number,ratingid: number,typeid: number){
  const scores = await this.scoreRepository
  .createQueryBuilder("scores")
  .where("scores.questionId = :qid", { qid: qid })
  .andWhere("scores.ratingPeriodId = :ratingid", { ratingid: ratingid })
  .andWhere("scores.evaluationTypeId = :typeid", { typeid: typeid })
  .andWhere("scores.userevaluatorId = :evaluatorid", { evaluatorid: evaluatorid })
  .andWhere("scores.userevaluateeId = :evaluateeid", { evaluateeid: evaluateeid })
  .getOne();
  return scores;
    // return this.scoreRepository.findOne({where: {questionId: qid}});
 }
  update(id: number, updateScoreDto: UpdateScoreDto) {
    return this.scoreRepository.update(id, updateScoreDto);
  }

  remove(id: number) {
    return this.scoreRepository.delete(id);
  }
  async reviewAllScores(evaluatorid: number,evaluateeid: number,ratingid: number,typeid: number) {
    const scores = await this.scoreRepository
    .createQueryBuilder("scores")
    .leftJoinAndSelect("scores.userevaluator", "evaluator")
    .leftJoinAndSelect("scores.userevaluatee", "evaluatee")
    .leftJoinAndSelect("scores.rating_period", "rating")
    .leftJoinAndSelect("scores.evaluation_type", "type")
    .leftJoinAndSelect("scores.question", "question")
    .andWhere("scores.ratingPeriodId = :ratingid", { ratingid: ratingid })
    .andWhere("scores.evaluationTypeId = :typeid", { typeid: typeid })
    .andWhere("scores.userevaluatorId = :evaluatorid", { evaluatorid: evaluatorid })
    .andWhere("scores.userevaluateeId = :evaluateeid", { evaluateeid: evaluateeid })
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    .getMany();
    return scores;

    // return this.scoreRepository.find();
  }
  
  async getPercentageByType(type: string,evaluatorid: number,evaluateeid: number,ratingid: number,typeid: number) {
    const scores = await this.scoreRepository
    .createQueryBuilder("scores")
    .leftJoinAndSelect("scores.userevaluator", "evaluator")
    .leftJoinAndSelect("scores.userevaluatee", "evaluatee")
    .leftJoinAndSelect("scores.rating_period", "rating")
    .leftJoinAndSelect("scores.evaluation_type", "type")
    .leftJoinAndSelect("scores.question", "question")
    .andWhere("scores.ratingPeriodId = :ratingid", { ratingid: ratingid })
    .andWhere("scores.evaluationTypeId = :typeid", { typeid: typeid })
    .andWhere("scores.userevaluatorId = :evaluatorid", { evaluatorid: evaluatorid })
    .andWhere("scores.userevaluateeId = :evaluateeid", { evaluateeid: evaluateeid })
    .andWhere("question.type = :type", { type: type })
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    .getMany();

    // for (let i = 0; i != allDataFromCollection.length; i++) {
    //   let item1Id = this.referencedb(allDataFromCollection[i].item1value);
    //   let item2Id = this.referencedb(allDataFromCollection[i].item2value);
    //   let item3Id = this.referencedb(allDataFromCollection[i].item3value);

    // }
    var initial_score=0;
    var initial_percent=0;
    for (let i = 0; i < scores.length; i++) {
      initial_score = initial_score + scores[i].eval_score;
    }
    if (type == "Commitment" || type=="Knowledge of Subject") {
       initial_percent = 20
    } else [
       initial_percent = 30
    ]
    // calculate percentage 
    const percentage = (initial_score/25)*initial_percent
    return percentage;


    // return this.scoreRepository.find();
  }
   
  async getPercentageByIndividualRating(type: string,evaluateeid: number,ratingid: number) {
    const scores = await this.scoreRepository
    .createQueryBuilder("scores")
    // .leftJoinAndSelect("scores.userevaluator", "evaluator")
    .leftJoinAndSelect("scores.userevaluatee", "evaluatee")
    .leftJoinAndSelect("scores.rating_period", "rating")
    .leftJoinAndSelect("scores.evaluation_type", "type")
    .leftJoinAndSelect("scores.question", "question")
    .andWhere("scores.ratingPeriodId = :ratingid", { ratingid: ratingid })
    // .andWhere("scores.evaluationTypeId = :typeid", { typeid: typeid })
    // .andWhere("scores.userevaluatorId = :evaluatorid", { evaluatorid: evaluatorid })
    .andWhere("scores.userevaluateeId = :evaluateeid", { evaluateeid: evaluateeid })
    .andWhere("type.description = :type", { type: type })
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    .getManyAndCount();


    
    // for (let i = 0; i != allDataFromCollection.length; i++) {
    //   let item1Id = this.referencedb(allDataFromCollection[i].item1value);
    //   let item2Id = this.referencedb(allDataFromCollection[i].item2value);
    //   let item3Id = this.referencedb(allDataFromCollection[i].item3value);

    // }
    var initial_score=0;
    var initial_percent=0;
    for (let i = 0; i < scores[0].length; i++) {
      initial_score = initial_score + scores[0][i].eval_score;
    }
    if (type == "Self" || type=="Peer") {
       initial_percent = 20
    } else [
       initial_percent = 30
    ]
    let all_score = scores[1]*5;
    // calculate percentage 
    const percentage = (initial_score/all_score)*initial_percent
    // return scores_count;
    return percentage;


    // return this.scoreRepository.find();
  }
  
}