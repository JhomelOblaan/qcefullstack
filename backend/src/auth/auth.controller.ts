import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

  @ApiBearerAuth()
  @Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signIn(@Body() loginDto: LoginDto) :any {
    // signIn(@Request() req) :any {
    // return loginDto;
    return this.authService.login(loginDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(): string {
    return "Hahahaha"
  }
}
