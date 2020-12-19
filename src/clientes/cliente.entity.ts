import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    email: string
    @Column()
    senha: string
}
