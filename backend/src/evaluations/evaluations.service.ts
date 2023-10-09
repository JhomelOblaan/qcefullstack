import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { count } from 'console';
import { ScoresService } from 'src/scores/scores.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository, In } from 'typeorm';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationsService {
  constructor(
    @InjectRepository(Evaluation)
    private evaluationRepository: Repository<Evaluation>,
    @Inject(ScoresService)
    private readonly scoreService: ScoresService,
    @Inject(UsersService)
    private readonly userService: UsersService
  ) {}

  create(createEvaluationDto: CreateEvaluationDto) {
       return this.evaluationRepository.save(createEvaluationDto);
  }

  async findAll() {
    const users = await this.evaluationRepository
    .createQueryBuilder("evaluations")
    .leftJoinAndSelect("evaluations.userevaluator", "evaluator")
    .leftJoinAndSelect("evaluations.userevaluatee", "evaluatee")
    .leftJoinAndSelect("evaluations.rating_period", "rating")
    .leftJoinAndSelect("evaluations.evaluation_type", "type")
    // .where("scores.id = :id", { id: 1 })
    .getMany();
    return users;

    // return this.evaluationRepository.find();
  }

  findOne(id: number) {
    return this.evaluationRepository.findOne({where: {id: id}});    
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationRepository.update(id, updateEvaluationDto);
  }

  remove(id: number) {
    return this.evaluationRepository.delete(id);
  }
 async getByStatus(status: number, evaluator_id: number) {
    const users = await this.evaluationRepository
    .createQueryBuilder("evaluations")
    .leftJoinAndSelect("evaluations.userevaluator", "evaluator")
    .leftJoinAndSelect("evaluations.userevaluatee", "evaluatee")
    .leftJoinAndSelect("evaluations.rating_period", "rating")
    .leftJoinAndSelect("evaluations.evaluation_type", "type")
    .where("evaluations.status = :status", { status: status })
    .andWhere("evaluations.userevaluator = :evaluatorid", { evaluatorid: evaluator_id })
    .getMany();
    return users;   
  }

  async  checkIfExist(evaluateeid: number,evaluatorid: number,ratingid: number,typeid: number){
    const evaluation = await this.evaluationRepository
    .createQueryBuilder("evaluations")
    .andWhere("evaluations.ratingPeriodId = :ratingid", { ratingid: ratingid })
    .andWhere("evaluations.evaluationTypeId = :typeid", { typeid: typeid })
    .andWhere("evaluations.userevaluatorId = :evaluatorid", { evaluatorid: evaluatorid })
    .andWhere("evaluations.userevaluateeId = :evaluateeid", { evaluateeid: evaluateeid })
    .getOne();
    return evaluation;
      // return this.scoreRepository.findOne({where: {questionId: qid}});
   }
   
   async getByFacultyDone(evaluateeid: number) {
    const users = await this.evaluationRepository
    .createQueryBuilder("evaluations")
    .leftJoinAndSelect("evaluations.userevaluator", "evaluator")
    .leftJoinAndSelect("evaluations.userevaluatee", "evaluatee")
    .leftJoinAndSelect("evaluations.rating_period", "rating")
    .leftJoinAndSelect("evaluations.evaluation_type", "type")
    .where("evaluations.status = true")
    .andWhere("evaluations.userevaluatee = :evaluateeid", { evaluateeid: evaluateeid })
    .getMany();
    // let count = 0
    for (let i = 0; i < users.length; i++) {
     var percent_commitment = this.scoreService.getPercentageByType('Commitment',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     var percent_knowledge = this.scoreService.getPercentageByType('Knowledge of Subject',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     var percent_independent = this.scoreService.getPercentageByType('Teaching for Independent Learning',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     var percent_managenent = this.scoreService.getPercentageByType('Management of Learning',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     users[i]['percent_commitment'] = (await percent_commitment).toFixed(2);
     users[i]['percent_knowledge'] = (await percent_knowledge).toFixed(2);
     users[i]['percent_independent'] = (await percent_independent).toFixed(2);
     users[i]['percent_managenent'] = (await percent_managenent).toFixed(2);
     users[i]['count'] = i + 1;
    }
    
    return users;   
  }
   async getFacultyByRole(role: string) {
    const users = await this.evaluationRepository
    .createQueryBuilder("evaluations")
    .leftJoinAndSelect("evaluations.userevaluator", "evaluator")
    .leftJoinAndSelect("evaluations.userevaluatee", "evaluatee")
    .leftJoinAndSelect("evaluations.rating_period", "rating")
    .leftJoinAndSelect("evaluations.evaluation_type", "type")
    .where("evaluations.status = true")
    // .andWhere("evaluations.evaluatee.role = Student")

    // .andWhere("evaluations.userevaluatee.role = Student")
    .getMany();
    
    for (let i = 0; i < users.length; i++) {
     var percent_commitment = this.scoreService.getPercentageByType('Commitment',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     var percent_knowledge = this.scoreService.getPercentageByType('Knowledge of Subject',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     var percent_independent = this.scoreService.getPercentageByType('Teaching for Independent Learning',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     var percent_managenent = this.scoreService.getPercentageByType('Management of Learning',users[i]['userevaluator']['id'],users[i]['userevaluatee']['id'],users[i]['rating_period']['id'],users[i]['evaluation_type']['id']);
     users[i]['percent_commitment'] = (await percent_commitment).toFixed(2);
     users[i]['percent_knowledge'] = (await percent_knowledge).toFixed(2);
     users[i]['percent_independent'] = (await percent_independent).toFixed(2);
     users[i]['percent_managenent'] = (await percent_managenent).toFixed(2);
    }
    
    return users;   
  }

  async assignPeertoPeer(role: string, rating_id: number) {
    // let role = "BSIT Faculty"
    let itusers = await this.userService.assignGetUserByProgram(role);
    let arr_id_users = []
    let arr_rand = []
    let count1 = 0;
    let count2 = 0;
    // collect ids
    for (let i = 0; i < itusers.length; i++) {
        arr_id_users.push(itusers[i].id)
    } 

    // PEER TO PEER FOR FACULTIES
    for (let x = 0; x < itusers.length; x++) {
      let arrayss = arr_id_users;
      let self_id = itusers[x];
    //  remove the evaluatee_id
    // drea nga code is for assign to self 
    await this.evaluationRepository
    .createQueryBuilder()
    .insert()
    .into("evaluation")
    .values([
        { status: false, rating_period:1, evaluation_type:1, userevaluator:arrayss[x], userevaluatee:arrayss[x]},
    ])
    .execute()
      count1++;
      
      arrayss = arrayss.filter(function(item) {
          return item !== itusers[x].id
      })
      arr_rand.push(arrayss)

      for (let y = 0; y < 5; y++) {
        // arr_id_users_rand.push(itusers[x].id)
        // generate random index
        if(arrayss.length == 0){
          // meaning there are less than 5 faculties
          break;
        }
        const random = Math.floor(Math.random() * (arrayss.length));
        arr_rand.push(random)
        const users = await this.evaluationRepository
        .createQueryBuilder()
        .insert()
        .into("evaluation")
        .values([
            { status: false, rating_period:1, evaluation_type:1, userevaluator:arrayss[random], userevaluatee:self_id},
        ])
        .execute()
        // remove the current index
        // arrayss = arrayss.filter(function(item) {
        //   return item !== itusers[random].id
        // })
        arrayss.splice(random, 1);
        // break;
        count2++;
      }
      // const random = Math.floor(Math.random() * arrayss.length);
      // break
  }
    return arr_rand;   
  }
  async assignPeertoSupervisor(role: string, rating_id: number) {
    // let role = "BSIT Faculty"
    let roledean
    let roleprogchair
    let itusers = await this.userService.assignGetUserByProgram(role);
    let arr_id_users = []
    let arr_rand = []
   
    if (role == "BSIT Faculty") {
      roledean = "IC Dean"
      roleprogchair = "BSIT Program Chairperson"
    } else if (role == "BSIS Faculty") {
      roledean = "IC Dean"
      roleprogchair = "BSIS Program Chairperson"
    } else if (role == "BSAF Faculty") {
      roledean = "IAAS Dean"
      roleprogchair = "BSAF Program Chairperson"
    } else if (role == "BSFAS Faculty") {
      roledean = "IAAS Dean"
      roleprogchair = "BSFAS Program Chairperson"
    } else if (role == "BSFT Faculty") {
      roledean = "IAAS Dean"
      roleprogchair = "BSFT Program Chairperson"
    } else if (role == "BSMB Faculty") {
      roledean = "IAAS Dean"
      roleprogchair = "BSMB Program Chairperson"
    } else if (role == "BPA Faculty") {
      roledean = "ILEGG Dean"
      roleprogchair = "BPA Program Chairperson"
    } else if (role == "BSDRM Faculty") {
      roledean = "ILEGG Dean"
      roleprogchair = "BSDRM Program Chairperson"
    } else if (role == "BSENTREP Faculty") {
      roledean = "ILEGG Dean"
      roleprogchair = "BSENTREP Program Chairperson"
    } else if (role == "BSSW Faculty") {
      roledean = "ILEGG Dean"
      roleprogchair = "BSSW Program Chairperson"
    } else if (role == "BSTM Faculty") {
      roledean = "ILEGG Dean"
      roleprogchair = "BSTM Program Chairperson"
    } else if (role == "BACOMM Faculty") {
      roledean = "ITED Dean"
      roleprogchair = "BACOMM Program Chairperson"
    } else if (role == "BSED Faculty") {
      roledean = "ITED Dean"
      roleprogchair = "BSED Program Chairperson"
    } else if (role == "BSED Faculty") {
      roledean = "ITED Dean"
      roleprogchair = "BSED Program Chairperson"
    } else if (role == "PHDEM Faculty") {
      roledean = "IADS Dean"
      roleprogchair = "PHDEM Program Chairperson"
    } else if (role == "MFM Faculty") {
      roledean = "IADS Dean"
      roleprogchair = "MFM Program Chairperson"
    } else if (role == "MABE Faculty") {
      roledean = "IADS Dean"
      roleprogchair = "MABE Program Chairperson"
    } else if (role == "MAEM Faculty") {
      roledean = "IADS Dean"
      roleprogchair = "MAEM Program Chairperson"
    } else if (role == "MSMB Faculty") {
      roledean = "IADS Dean"
      roleprogchair = "MSMB Program Chairperson"
    } else {
      roledean = "IADS Dean"
      roleprogchair = "MST Program Chairperson"
    }

    let deanid = await this.userService.getDeanProgChair(roledean);
    let progid = await this.userService.getDeanProgChair(roleprogchair);
    let progchairarr = []
  
    for (let i = 0; i < itusers.length; i++) {
        arr_id_users.push(itusers[i].id)
        progchairarr.push(itusers[i].id)
    }

    // PEER TO PEER FOR DEANS AND PROG CHAIRS
    let deanarr = arr_id_users
    for (let y = 0; y < 5; y++) {
      // generate random index
      
      const random = Math.floor(Math.random() * (deanarr.length));
      const randomprog = Math.floor(Math.random() * (progchairarr.length));
      const users = await this.evaluationRepository
      .createQueryBuilder()
      .insert()
      .into("evaluation")
      .values([
          // { status: false, rating_period:rating_id, evaluation_type:1, userevaluator:deanarr[random], userevaluatee:deanid},
          { status: false, rating_period:rating_id, evaluation_type:1, userevaluator:progchairarr[randomprog], userevaluatee:progid},
      ])
      .execute()
      deanarr.splice(random, 1);
      progchairarr.splice(randomprog, 1);
      if(deanarr.length == 0){
        // meaning there are less than 5 faculties
        // return y
        break;
      }
    }

   return arr_id_users;   
  }

  async assignPeertoDean(role: string, rating_id: number) {
    // let role = "BSIT Faculty"
    let roledean = role
    let roleprogchair = []
    let arr_id_users = []
    let arr_rand = []
    // return arr_id_users;   
   
    if (role == "IC Dean") {
      roleprogchair = ["BSIT Faculty", "BSIS Faculty"]
    } else if (role == "IAAS Dean") {
      roleprogchair = ["BSAF Faculty", "BSFAS Faculty", "BSFT Faculty", "BSMB Faculty"]
    } else if (role == "ILEGG Dean") {
      roleprogchair = ["BPA Program Chairperson", "BSDRM Faculty", "BSENTREP Faculty", "BSSW Faculty", "BSTM Faculty"]
    } else if (role == "ITED Dean") {
      roleprogchair = ["BSED Faculty", "BACOMM Faculty", "BSTLED Faculty"]
    } else {
      roleprogchair = ["PHDEM Faculty", "MFM Faculty", "MABE Faculty", "MAEM Faculty", "MSMB Faculty", "MST Faculty"]
    }

    

    let deanid = await this.userService.getDeanProgChair(roledean);
    // let progid = await this.userService.getDeanProgChair(roleprogchair);
    let progchairarr = []
    for (let index = 0; index < roleprogchair.length; index++) {
        
      let itusers = await this.userService.assignGetUserByProgram(roleprogchair[index]);
      for (let i = 0; i < itusers.length; i++) {
          arr_id_users.push(itusers[i].id)
      }
    }
// return arr_id_users;
    // PEER TO PEER FOR DEANS AND PROG CHAIRS
    let deanarr = arr_id_users
    for (let y = 0; y < 5; y++) {
      // generate random index
      
      const random = Math.floor(Math.random() * (deanarr.length));
      const users = await this.evaluationRepository
      .createQueryBuilder()
      .insert()
      .into("evaluation")
      .values([
          { status: false, rating_period:rating_id, evaluation_type:1, userevaluator:deanarr[random], userevaluatee:deanid},
          // { status: false, rating_period:rating_id, evaluation_type:1, userevaluator:progchairarr[randomprog], userevaluatee:progid},
      ])
      .execute()
      deanarr.splice(random, 1);
      if(deanarr.length == 0){
        // meaning there are less than 5 faculties
        // return y
        break;
      }
    }

   return arr_id_users;   
  }

  async assignSupervisorIc(rating_id: number){
    let dean = "IC Dean"
    let roles  
    // let prog_chair = "BSIT Program Chairperson"
    let icdean = await this.userService.getDeanProgChair(dean);
    roles = ["BSIT Program Chairperson", "BSIS Program Chairperson"]
    
  let icfaculties
  let icdeanid = await this.userService.getDeanProgChair(dean);
  // assign self to dean
  const users = await this.evaluationRepository
  .createQueryBuilder()
  .insert()
  .into("evaluation")
  .values([
      { status: false, rating_period:1, evaluation_type:3, userevaluator:icdeanid, userevaluatee:icdeanid},
  ])
  .execute()
  // Assign supervisor to dean and vice versa and self to progchair
   for (let x = 0; x < roles.length; x++) {
    let progchairid = await this.userService.getDeanProgChair(roles[x]);
    if (roles[x] == "BSIT Program Chairperson") {
     icfaculties = await this.userService.assignGetUserByProgram("BSIT Faculty");
    } else {
      icfaculties = await this.userService.assignGetUserByProgram("BSIS Faculty");
    }
  // Assign supervisor to dean and vice versa and self to progchair
    const users = await this.evaluationRepository
        .createQueryBuilder()
        .insert()
        .into("evaluation")
        .values([
            { status: false, rating_period:1, evaluation_type:4, userevaluator:icdeanid, userevaluatee:progchairid},
            { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:icdeanid},
            { status: false, rating_period:1, evaluation_type:3, userevaluator:progchairid, userevaluatee:progchairid},
        ])
        .execute()
      // Assign supervisor to faculties
      for (let index = 0; index < icfaculties.length; index++) {
        await this.evaluationRepository
          .createQueryBuilder()
          .insert()
          .into("evaluation")
          .values([
              { status: false, rating_period:1, evaluation_type:4, userevaluator:icdeanid, userevaluatee:icfaculties[index].id},
              { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:icfaculties[index].id},
          ])
          .execute()
      }
   }

    return icdean
  }

  async assignSupervisorIaas(rating_id: number){
    let dean = "IASS Dean"
    let roles  
    // let prog_chair = "BSIT Program Chairperson"
    let icdean = await this.userService.getDeanProgChair(dean);
    roles = ["BSAF Program Chairperson", "BSFAS Program Chairperson", "BSFT Program Chairperson", "BSMB Program Chairperson"]
    
  let faculties
  let deanid = await this.userService.getDeanProgChair(dean);
  // assign self to dean
  const users = await this.evaluationRepository
  .createQueryBuilder()
  .insert()
  .into("evaluation")
  .values([
      { status: false, rating_period:1, evaluation_type:3, userevaluator:deanid, userevaluatee:deanid},
  ])
  .execute()
  // Assign supervisor to dean and vice versa and self to progchair
   for (let x = 0; x < roles.length; x++) {
    let progchairid = await this.userService.getDeanProgChair(roles[x]);
    if (roles[x] == "BSAF Program Chairperson") {
     faculties = await this.userService.assignGetUserByProgram("BSAF Faculty");
    } else if (roles[x] == "BSFAS Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("BSFAS Faculty");
     } else if (roles[x] == "BSFT Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("BSFT Faculty");
     } else {
      faculties = await this.userService.assignGetUserByProgram("BSMB Faculty");
    }
  // Assign supervisor to dean and vice versa and self to progchair
    const users = await this.evaluationRepository
        .createQueryBuilder()
        .insert()
        .into("evaluation")
        .values([
            { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:progchairid},
            { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:deanid},
            { status: false, rating_period:1, evaluation_type:3, userevaluator:progchairid, userevaluatee:progchairid},
        ])
        .execute()
      // Assign supervisor to faculties
      for (let index = 0; index < faculties.length; index++) {
        await this.evaluationRepository
          .createQueryBuilder()
          .insert()
          .into("evaluation")
          .values([
              { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:faculties[index].id},
              { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:faculties[index].id},
          ])
          .execute()
      }
   }

    return icdean
  }



  async assignSupervisorIlegg(rating_id: number){
    let dean = "ILEGG Dean"
    let roles  
    // let prog_chair = "BSIT Program Chairperson"
    roles = ["BPA Program Chairperson", "BSDRM Program Chairperson", "BSENTREP Program Chairperson", "BSSW Program Chairperson", "BSTM Program Chairperson"]
    
  let faculties
  let deanid = await this.userService.getDeanProgChair(dean);
  // assign self to dean
  const users = await this.evaluationRepository
  .createQueryBuilder()
  .insert()
  .into("evaluation")
  .values([
      { status: false, rating_period:1, evaluation_type:3, userevaluator:deanid, userevaluatee:deanid},
  ])
  .execute()
  // Assign supervisor to dean and vice versa and self to progchair
   for (let x = 0; x < roles.length; x++) {
    let progchairid = await this.userService.getDeanProgChair(roles[x]);
    if (roles[x] == "BPA Program Chairperson") {
     faculties = await this.userService.assignGetUserByProgram("BPA Faculty");
    } else if (roles[x] == "BSDRM Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("BSDRM Faculty");
     } else if (roles[x] == "BSENTREP Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("BSENTREP Faculty");
     } else if (roles[x] == "BSSW Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("BSSW Faculty");
     } else {
      faculties = await this.userService.assignGetUserByProgram("BSTM Faculty");
    }
  // Assign supervisor to dean and vice versa and self to progchair
    const users = await this.evaluationRepository
        .createQueryBuilder()
        .insert()
        .into("evaluation")
        .values([
            { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:progchairid},
            { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:deanid},
            { status: false, rating_period:1, evaluation_type:3, userevaluator:progchairid, userevaluatee:progchairid},
        ])
        .execute()
      // Assign supervisor to faculties
      for (let index = 0; index < faculties.length; index++) {
        await this.evaluationRepository
          .createQueryBuilder()
          .insert()
          .into("evaluation")
          .values([
              { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:faculties[index].id},
              { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:faculties[index].id},
          ])
          .execute()
      }
   }

    return dean
  }

  async assignSupervisorIted(rating_id: number){
    let dean = "ITED Dean"
    let roles  
    // let prog_chair = "BSIT Program Chairperson"
    roles = ["BACOMM Program Chairperson", "BSED Program Chairperson", "BSTLED Program Chairperson"]
    
  let faculties
  let deanid = await this.userService.getDeanProgChair(dean);
  // assign self to dean
  const users = await this.evaluationRepository
  .createQueryBuilder()
  .insert()
  .into("evaluation")
  .values([
      { status: false, rating_period:1, evaluation_type:3, userevaluator:deanid, userevaluatee:deanid},
  ])
  .execute()
  // Assign supervisor to dean and vice versa and self to progchair
   for (let x = 0; x < roles.length; x++) {
    let progchairid = await this.userService.getDeanProgChair(roles[x]);
    if (roles[x] == "BACOMM Program Chairperson") {
     faculties = await this.userService.assignGetUserByProgram("BACOMM Faculty");
    } else if (roles[x] == "BSED Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("BSED Faculty");
     } else {
      faculties = await this.userService.assignGetUserByProgram("BSTLED Faculty");
    }
  // Assign supervisor to dean and vice versa and self to progchair
    const users = await this.evaluationRepository
        .createQueryBuilder()
        .insert()
        .into("evaluation")
        .values([
            { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:progchairid},
            { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:deanid},
            { status: false, rating_period:1, evaluation_type:3, userevaluator:progchairid, userevaluatee:progchairid},
        ])
        .execute()
      // Assign supervisor to faculties
      for (let index = 0; index < faculties.length; index++) {
        await this.evaluationRepository
          .createQueryBuilder()
          .insert()
          .into("evaluation")
          .values([
              { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:faculties[index].id},
              { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:faculties[index].id},
          ])
          .execute()
      }
   }

    return dean
  }


  async assignSupervisorIAds(rating_id: number){
    let dean = "IADS Dean"
    let roles  
    // let prog_chair = "BSIT Program Chairperson"
    roles = ["PHDEM Program Chairperson", "MFM Program Chairperson", "MABE Program Chairperson", "MAEM Program Chairperson", "MSMB Program Chairperson", "MST Program Chairperson"]
    
  let faculties
  let deanid = await this.userService.getDeanProgChair(dean);
  // assign self to dean
  const users = await this.evaluationRepository
  .createQueryBuilder()
  .insert()
  .into("evaluation")
  .values([
      { status: false, rating_period:1, evaluation_type:3, userevaluator:deanid, userevaluatee:deanid},
  ])
  .execute()
  // Assign supervisor to dean and vice versa and self to progchair
   for (let x = 0; x < roles.length; x++) {
    let progchairid = await this.userService.getDeanProgChair(roles[x]);
    if (roles[x] == "PHDEM Program Chairperson") {
     faculties = await this.userService.assignGetUserByProgram("PHDEM Faculty");
    } else if (roles[x] == "MFM Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("MFM Faculty");
     } else if (roles[x] == "MABE Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("MABE Faculty");
     } else if (roles[x] == "MAEM Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("MAEM Faculty");
     } else if (roles[x] == "MSMB Program Chairperson") {
      faculties = await this.userService.assignGetUserByProgram("MSMB Faculty");
     } else {
      faculties = await this.userService.assignGetUserByProgram("MST Faculty");
    }
  // Assign supervisor to dean and vice versa and self to progchair
    const users = await this.evaluationRepository
        .createQueryBuilder()
        .insert()
        .into("evaluation")
        .values([
            { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:progchairid},
            { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:deanid},
            { status: false, rating_period:1, evaluation_type:3, userevaluator:progchairid, userevaluatee:progchairid},
        ])
        .execute()
      // Assign supervisor to faculties
      for (let index = 0; index < faculties.length; index++) {
        await this.evaluationRepository
          .createQueryBuilder()
          .insert()
          .into("evaluation")
          .values([
              { status: false, rating_period:1, evaluation_type:4, userevaluator:deanid, userevaluatee:faculties[index].id},
              { status: false, rating_period:1, evaluation_type:4, userevaluator:progchairid, userevaluatee:faculties[index].id},
          ])
          .execute()
      }
   }

    return dean
  }
























  removeFromarray(id_user: string[], index: number){
    
    return id_user
  }

  async assignStudentToFaculty(evaluatee_email: string, rating_id: number, email_arr: string[]) {
   let arr_user_ids = []
   let faculty_user_id = await this.userService.getUserByEmail(evaluatee_email);
  //  return faculty_user_id;   
   // loop through array and save every index of the array
   for (let index = 0; index < email_arr.length; index++) {
    let user = await this.userService.getUserByEmail(email_arr[index]);
    // check if email user with an email exist
    if (user) {
      // arr_user_ids.push(user.id)
      await this.evaluationRepository
          .createQueryBuilder()
          .insert()
          .into("evaluation")
          .values([
              { status: false, rating_period:rating_id, evaluation_type:2, userevaluator:user.id, userevaluatee:faculty_user_id.id},
          ])
          .execute()
    }    
   }
    return faculty_user_id.id;   
   

  //  return arr_id_users;   
  }
  // async getByFacultyIndividualRating(facutyid: number, ratingid: number) {
  //   let auth_user = await this.userService.findOne(facutyid)
  //   let roles
  //   if (auth_user.role == "ITED Manager") {
  //      roles = ["BSED Faculty", "BACOMM Faculty"]
  //   } else if (auth_user.role = "IC Manager"){
  //     roles = ["BSIT Faculty", "BSIS Faculty"]
  //   } else if (auth_user.role = "ITED Manager"){
  //     roles = ["BSIT Faculty", "BSIS Faculty"]
  //   }
  //   const users = await this.evaluationRepository
  //   .createQueryBuilder("evaluations")
  // //   .select('userevaluateeId')
  // // .distinct(true)
  //   .leftJoinAndSelect("evaluations.userevaluator", "evaluator")
  //   .leftJoinAndSelect("evaluations.userevaluatee", "evaluatee")
  //   .leftJoinAndSelect("evaluations.rating_period", "rating")
  //   .leftJoinAndSelect("evaluations.evaluation_type", "type")
  //   // .select('DISTINCT evaluations.userevaluateeId')
  //   // .distinct(userevaluateeId)
  //   .where("evaluations.status = true")
  //   // In([...userIds])
  //   // {userId: In([...userIds])}
  //   // .andWhere("evaluations.userevaluatee = :evaluateeid", { evaluateeid: facutyid })
  //   .andWhere("evaluatee.role IN(:...roles)", { roles: roles })
  //   // .andWhere("evaluatee.role = 'BSED Faculty'")
  //   // .andWhere("evaluatee.role = :role", )
  //   // .andWhere("evaluatee.role = 'BSED Faculty'")
  //   .getRawMany();
  //   // .getMany();
  //   return users;   
  //   var percent_peer;
  //   var percent_student;
  //   var percent_self;
  //   var percent_supervisor;
  //   for (let i = 0; i < users.length; i++) {
  //     percent_peer = this.scoreService.getPercentageByIndividualRating('Peer',users[i]['userevaluatee']['id'],users[i]['rating_period']['id']);
  //     percent_student = this.scoreService.getPercentageByIndividualRating('Student',users[i]['userevaluatee']['id'],users[i]['rating_period']['id']);
  //     percent_self = this.scoreService.getPercentageByIndividualRating('Self',users[i]['userevaluatee']['id'],users[i]['rating_period']['id']);
  //     percent_supervisor = this.scoreService.getPercentageByIndividualRating('Supervisor',users[i]['userevaluatee']['id'],users[i]['rating_period']['id']);
  //    users[i]['percent_peer'] = (await percent_peer).toFixed(2);
  //    users[i]['percent_student'] = (await percent_student).toFixed(2);
  //    users[i]['percent_self'] = (await percent_self).toFixed(2);
  //    users[i]['percent_supervisor'] = (await percent_supervisor).toFixed(2);
  //   }
    
  //   return users;   
  // }


}
