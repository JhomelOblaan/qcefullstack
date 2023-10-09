import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ScoresModule } from 'src/scores/scores.module';
import { JwtModule } from '@nestjs/jwt';

  @Module({
  imports: [TypeOrmModule.forFeature([User]), ScoresModule,
  JwtModule.register({
    global: true,
    secret: 'super-secret-cat',
    signOptions: { expiresIn: '1d' },
  }),],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
