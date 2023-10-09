import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  @Get('get-evaluatees/:evaluatorid')
  getEvaluatees(@Param('evaluatorid') evaluatorid: number) {
    return this.usersService.getEvaluatees(evaluatorid);
  }
  @Get('fetched-user-by-role/:role')
  getUsersByRole(@Param('role') role: string) {
    return this.usersService.getUsersByRole(role);
  }
  @Get('fetched-user-by-roles/:institute')
  getUsersByRoles(@Param('institute') institute: string) {
    return this.usersService.getUsersByRoles(institute);
  }
  @Get('get-by-faculty-individual-rating/:managerid/:ratingid')
  getByFacultyDoneIndividualRating(@Param('managerid') managerid: number, @Param('ratingid') ratingid: number) {
    return this.usersService.getByFacultyIndividualRating(managerid, ratingid);
  }
  @Get('get-by-email/:email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.getByEmail(email);
  }

  @Post('google/signUp')
  googleSignUp(@Body() createAuthDto: CreateUserDto) {
    return this.usersService.signinLocal(createAuthDto);
  }
}
