import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Paciente{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    cpf: string;

    @Column({
        type: "text",
       
      
    })
    foto: string;

    @Column()
    email: string;

}