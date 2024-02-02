import { Body, Controller , Get, Post , Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { Response, response } from "express";


@Controller('Users')
export class UserController{
    constructor(private  readonly userService: UserService) {}

    // @Get()
    // getSample(): any {
    //     return 'Hello from NestJS!';
    // }

    @Get()
    findall() : any{
        return this.userService.findAll();
    }

    @Get('/Find')
    findone(@Body('id') id: number) : any{
        console.log(id);
        return this.userService.findone(id);
    }

    @Post('/AddUser')
    @UsePipes( new ValidationPipe())
    async create(@Body() user: Partial<UserEntity>): Promise<UserEntity> {
        console.log(user);
        return this.userService.create(user);
    }
}