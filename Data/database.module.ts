import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { DataSource } from "typeorm";
import { Cat } from "./Entidades/Cat.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'cats',
            entities: [Cat],
            synchronize: true
          })
    ]
})

export class DatabaseModule {
    constructor(private dataSource: DataSource){}
}