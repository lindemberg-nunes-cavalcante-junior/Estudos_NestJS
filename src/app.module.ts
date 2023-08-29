import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';
import { AppCatservice } from './app.Catservice';
import { DatabaseModule } from 'Data/database.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({envFilePath: '.development.env'})],
  controllers: [AppController, CatsController],
  providers: [AppService, AppCatservice,],
})
export class AppModule {}


