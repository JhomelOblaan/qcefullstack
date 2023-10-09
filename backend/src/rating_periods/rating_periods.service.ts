import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationsService } from 'src/evaluations/evaluations.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateRatingPeriodDto } from './dto/create-rating_period.dto';
import { UpdateRatingPeriodDto } from './dto/update-rating_period.dto';
import { RatingPeriod } from './entities/rating_period.entity';

@Injectable()
export class RatingPeriodsService {
  constructor(
    @InjectRepository(RatingPeriod)
    private ratingPeriodRepository: Repository<RatingPeriod>,    
    @Inject(UsersService)
    private readonly userService: UsersService,    
    @Inject(EvaluationsService)
    private readonly evaluationsService: EvaluationsService
  ) {}

  create(createRatingPeriodDto: CreateRatingPeriodDto) {
    // uncomments rani after
    return this.ratingPeriodRepository.save(createRatingPeriodDto);
   
    //  for assigning peer to peer, you assign it by program
    //  this.evaluationsService.assignPeertoPeer("BACOMM Faculty", 1);
    //  for assigning supervisor, you assign it by institute
    // return this.evaluationsService.assignSupervisorIted(1);
    //  for assigning peer to supervisor(means dean and prog chairs evaluated by the faculties under their programs), you assign it by program
    // return this.evaluationsService.assignPeertoSupervisor("BSED Faculty", 1);
    // assignPeertoDean
    // return this.evaluationsService.assignPeertoDean("ITED Dean", 1);
     // assign Student to Faculty
    //  return this.evaluationsService.assignStudentToFaculty("castro.trixie@gmail.com", 1, ['reyes.jess@gmail.com','jane.delascruz@gmail.com']);
    }

  findAll() {
    return this.ratingPeriodRepository.find();
  }

  findOne(id: number) {
    return this.ratingPeriodRepository.findOne({where: {id: id}});
  }

  update(id: number, updateRatingPeriodDto: UpdateRatingPeriodDto) {
    return this.ratingPeriodRepository.update(id, updateRatingPeriodDto);
  }

  remove(id: number) {
    return this.ratingPeriodRepository.delete(id);
  }
  async getLatest() {
    const rating = await this.ratingPeriodRepository
    .createQueryBuilder("rating-periods")
    .orderBy('id', 'DESC')
    .getOne();
    return rating.id;
    
    // return this.ratingPeriodRepository.find();
  }

}
