import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { DataSource } from "typeorm";
import { Cat } from "./Entidades/Cat.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'Cats',
            entities: [Cat],
            synchronize: true
          })
    ]
})

export class DatabaseModule {
    constructor(private dataSource: DataSource){}
}