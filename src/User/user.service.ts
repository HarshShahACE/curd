import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserService{

    constructor(@InjectRepository(UserEntity) private userrepositry : Repository<UserEntity>,) {}

    async findAll(): Promise<UserEntity[]> {
        return this.userrepositry.find();
      }

    async findone(id : number) : Promise<UserEntity | undefined>{
        return this.userrepositry.findOneBy({id : id});
    }

    async create(user: Partial<UserEntity>) : Promise<UserEntity | undefined>{
        const newUser = this.userrepositry.create(user);
        return this.userrepositry.save(newUser);
    }

}