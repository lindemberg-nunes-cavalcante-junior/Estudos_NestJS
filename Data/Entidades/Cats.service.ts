import { Injectable } from "@nestjs/common";
import { Cat } from "./Cat.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class Catservice {
    constructor(
        @InjectRepository(Cat)
        private catsRepository: Repository<Cat>,
    ) {}

    findAll(): Promise<Cat[]> {
        return this.catsRepository.find();
    }
    /*findOne(id: number): Promise<Cat | null>{
        return this.catsRepository.findOneBy({ id });
    }*/
    async remove(id: number): Promise<void> {
        await this.catsRepository.delete(id);
    }
}