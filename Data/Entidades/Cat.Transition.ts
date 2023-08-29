import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Cat } from "./Cat.entity";

 
 
 @Injectable()
 export class CatTransition{
    constructor(private dataSource: DataSource) {}

    async createMany(cats: Cat[]){
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(cats[0]);

            await queryRunner.commitTransaction();
        }
        catch(err){
            await queryRunner.rollbackTransaction();
        }
        finally{
            await queryRunner.release();
        }
    }
 }
 