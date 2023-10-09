import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { RatingPeriodsModule } from './rating_periods/rating_periods.module';
import { EvaluationTypesModule } from './evaluation_types/evaluation_types.module';
import { ScoresModule } from './scores/scores.module';
import { UsersModule } from './users/users.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { OverallreportModule } from './pdfgen/overallreport/overallreport.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'qce',
      entities: ['dist/**/entities/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    QuestionsModule,
    RatingPeriodsModule,
    EvaluationTypesModule,
    ScoresModule,
    UsersModule,
    EvaluationsModule,
    CommentsModule,
    AuthModule,
    RolesModule,
    OverallreportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
