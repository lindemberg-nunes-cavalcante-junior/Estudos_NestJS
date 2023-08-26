import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';
import { AppCatservice } from './app.Catservice';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, AppCatservice],
})
export class AppModule {}


