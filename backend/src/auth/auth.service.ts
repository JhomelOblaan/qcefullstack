import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email:string, password: string): Promise<any>{

    const user = await this.usersService.findOneByUsername(email, password);
    if(user && user.password === password){
      // const {password, username, ...rest} = user;
      return user;
    }
    return user;

    // return "aysfgudyg";
  }
  async login(user: any){
    const payload = {name:user.username, sub: user.password};
    const byuser = await this.usersService.findOneByUsername(user.email, user.password);
      const {password, ...rest} = byuser;
    return{
      payload: payload,
      access_token: await this.jwtService.signAsync(payload),
      user: rest
    }
  }
}
