import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "./Cat.entity";
import { Module } from "@nestjs/common";
import { Catservice } from "./Cats.service";


@Module({
    imports:[TypeOrmModule.forFeature([Cat])],
    providers: [Catservice],
    controllers: [],
})

export class CatModule {}