import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Score } from 'src/scores/entities/score.entity';
import { ScoresService } from 'src/scores/scores.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      @Inject(ScoresService)
      private readonly scoreService: ScoresService,private jwtServices: JwtService
     
      
      // @InjectRepository(Score)
      // private scoreRepository: Repository<Score>,
    ) {}
    
    // @InjectRepository(Users)
    // private usersRepository: Repository<Users>,
    // @InjectRepository(UsersRoles)
    // private usersRolesRepository: Repository<UsersRoles>,

    async signinLocal(createAuthDto:CreateUserDto,): Promise<any>{
      // console.log(createAuthDto.email)
    
      const existingUser = await this.userRepository.findOneBy({
        email: createAuthDto.email,
      });
    
       console.log(existingUser)
       if(existingUser){
        const payload = { sub: existingUser.id, email: existingUser.email};
          // console.log(this.jwtServices.signAsync(payload))
        return {
          access_token: await this.jwtServices.signAsync(payload),
          user: existingUser,
          };
       }
     if(existingUser === null){
          const usersave =  this.userRepository.create(createAuthDto);
          return  this.userRepository.save(usersave);
     }
     
     return this.signinLocal
    
      // if(existingUser){
      //   const payload = { sub: existingUser.id, email: existingUser.email};
      //       //  console.log(payload)
      //       return {
      //         access_token: await this.jwtServices.signAsync(payload),
      //         user: existingUser,
      //         };
      // }
    
    }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
        return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({where: {id: id}});
  }
  findOneByUsername(email: string, password: string) {
    return this.userRepository.findOne({where: {email: email, password: password}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
  async getEvaluatees(evaluatorid: number) {
    const users = await this.userRepository
    .createQueryBuilder("scores")
    .where("id = :evaluatorid", { evaluatorid: evaluatorid })
    // .leftJoinAndSelect(Question,'q', 'scores.questionId = q.id')
    // .where("scores.id = :id", { id: 1 })k
    .getMany();
    return users;
    // .select('entity name.column')
    // .distinct(true)
    // return this.scoreRepository.find();
  }
  async getUsersByRole(role: string) {
    const users = await this.userRepository
    .createQueryBuilder("scores")
    .where("role = :role", { role: role })
    .getMany();
    return users;
  }
  
  async getByEmail(email: string) {
    const users = await this.userRepository
    .createQueryBuilder("users")
    .where("email = :email", { email: email })
    .getOne();
    return users.id;
  }

  async getUsersByRoles(institutes: string) {
    let roles=[]
    if (institutes == "IC") {
      roles = ["BSIT Faculty", "BSIS Faculty"]
    } else if (institutes == "IAAS") {
      roles = ["BSAF Faculty", "BSFAS Faculty", "BSFT Faculty", "BSMB Faculty"]
    } else if (institutes == "ILEGG") {
      roles = ["BPA Program Chairperson", "BSDRM Faculty", "BSENTREP Faculty", "BSSW Faculty", "BSTM Faculty"]
    } else if (institutes == "ITED") {
      roles = ["BSED Faculty", "BACOMM Faculty", "BSTLED Faculty"]
    } else {
      roles = ["PHDEM Faculty", "MFM Faculty", "MABE Faculty", "MAEM Faculty", "MSMB Faculty", "MST Faculty"]
    }

    const users = await this.userRepository
    .createQueryBuilder("users")
    .where("users.role IN(:...roles)", { roles: roles })
    .getMany();
    // const rolebacomm = "[BSED Faculty, BACOMM Faculty]"

    return users;
  }

  async getByFacultyIndividualRating(facutyid: number, ratingid: number) {
    let auth_user = await this.findOne(facutyid)
    let roles
    if (auth_user.role == "ITED Manager") {
       roles = ["BSED Faculty", "BACOMM Faculty", "BSTLED Faculty"]
    } else if (auth_user.role == "IC Manager"){
      roles = ["BSIT Faculty", "BSIS Faculty"]
    } else if (auth_user.role == "ILEGG Manager"){
      roles = ["BPA Program Chairperson", "BSDRM Faculty", "BSENTREP Faculty", "BSSW Faculty", "BSTM Faculty"]
    } else if (auth_user.role == "IAAS Manager"){
      roles = ["BSAF Faculty", "BSFAS Faculty", "BSFT Faculty", "BSMB Faculty"]
    } else {
      roles = ["PHDEM Faculty", "MFM Faculty", "MABE Faculty", "MAEM Faculty", "MSMB Faculty", "MST Faculty"]
    }
    const users = await this.userRepository
    .createQueryBuilder("users")
    .andWhere("users.role IN(:...roles)", { roles: roles })
    .getMany();
    // return users;   
    var percent_peer;
    var percent_student;
    var percent_self;
    var percent_supervisor;
    var count;
    for (let i = 0; i < users.length; i++) {
      percent_peer = this.scoreService.getPercentageByIndividualRating('Peer',users[i]['id'],ratingid);
      percent_student = this.scoreService.getPercentageByIndividualRating('Student',users[i]['id'],ratingid);
      percent_self = this.scoreService.getPercentageByIndividualRating('Self',users[i]['id'],ratingid);
      percent_supervisor = this.scoreService.getPercentageByIndividualRating('Supervisor',users[i]['id'],ratingid);
     users[i]['count'] = i + 1;
     users[i]['percent_peer'] = (await percent_peer).toFixed(2);
     users[i]['percent_student'] = (await percent_student).toFixed(2);
     users[i]['percent_self'] = (await percent_self).toFixed(2);
     users[i]['percent_supervisor'] = (await percent_supervisor).toFixed(2);
    }
    
    return users;   
  }

  async assignGetUserByProgram(program: string) {
    let role = program
    // if (program == "BSIT") {
    //   role = "BSIT FACULTY"
    // } else if (program == "BSIS"){
    //   role = "BSIS FACULTY"
    // }
    const users = await this.userRepository
    .createQueryBuilder("users")
    .where("role = :role", {role: role})
    .getMany();
    return users;   
  }
  
  async getDeanProgChair(role: string) {
    
    const users = await this.userRepository
    .createQueryBuilder("users")
    .where("role = :role", {role: role})
    .getOne();
    return users.id;   
  }
  async getProgChairByDean(deanrole: string) {
    let roles
    if (deanrole == "ITED Dean") {
      roles = ["BSED Program Chairperson", "BACOMM Program Chairperson"]
   } else if (deanrole == "IC Dean"){
     roles = ["BSIT Program Chairperson", "BSIS Program Chairperson"]
   } else if (deanrole == "ILEGG Dean"){
     roles = ["BPA Program Chairperson", "BSDRM Program Chairperson", "BSENTREP Program Chairperson", "BSSW Program Chairperson", "BSTM Program Chairperson"]
   } else if (deanrole == "IAAS Dean"){
    roles = ["BSAF Program Chairperson", "BSFAS Program Chairperson", "BSFT Program Chairperson", "BSMB Program Chairperson"]
  } else {
    roles = ["PHDEM Program Chairperson", "MFM Program Chairperson", "MABE Program Chairperson", "MAEM Program Chairperson", "MSMB Program Chairperson", "MST Program Chairperson"]
  }
    const users = await this.userRepository
    .createQueryBuilder("users")
    // .where("role = :role", {role: role})
    .where("users.role IN(:...roles)", { roles: roles })
    .getMany();
    return users;   
  }
  async getUserByEmail(email: string) {
    const users = await this.userRepository
    .createQueryBuilder("users")
    .where("email = :email", { email: email })
    .getOne();
    return users;
  }
}
