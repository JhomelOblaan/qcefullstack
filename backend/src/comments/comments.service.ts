import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save(createCommentDto);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return this.commentRepository.findOne({where: {id: id}});    
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(id, updateCommentDto);
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
  async reviewAllComments(evaluatorid: number,evaluateeid: number,ratingid: number,typeid: number) {
    const comments = await this.commentRepository
    .createQueryBuilder("comments")
    .leftJoinAndSelect("comments.userevaluator", "evaluator")
    .leftJoinAndSelect("comments.userevaluatee", "evaluatee")
    .leftJoinAndSelect("comments.rating_period", "rating")
    .leftJoinAndSelect("comments.evaluation_type", "type")
    .andWhere("comments.ratingPeriodId = :ratingid", { ratingid: ratingid })
    .andWhere("comments.evaluationTypeId = :typeid", { typeid: typeid })
    .andWhere("comments.userevaluatorId = :evaluatorid", { evaluatorid: evaluatorid })
    .andWhere("comments.userevaluateeId = :evaluateeid", { evaluateeid: evaluateeid })
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    .getOne();
    return comments;

    // return this.scoreRepository.find();
  }
}
