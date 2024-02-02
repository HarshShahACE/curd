import { IsEmail, IsEmpty, IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    @IsEmpty()
    id : number

    @Column()
    @IsEmpty()
    name : string
    
    @IsEmail()
    @Column()
    email : string
    
    @IsEmpty()
    @Column()
    password : string
}