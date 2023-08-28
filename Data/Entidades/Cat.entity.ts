import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    Name: string;

    @Column()
    isActive: boolean;
}