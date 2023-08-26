import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppCatservice } from './app.Catservice';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Get')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/Teste')
  getTeste() {
    return this.appService.getTeste()
  }
}

@Controller('cats')
export class CatsController{
  constructor(private readonly appCat: AppCatservice) {}
  @Get()
  findAll() {
    return this.appCat.getCats()
  }
}

 /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/
