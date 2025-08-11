import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    signup(@Body() body: { username: string, password: string}) {
        return this.usersService.signup(body.username, body.password);
    }

    @Post('login')
    login(@Body() body: { username: string, password: string}) {
        return this.usersService.login(body.username, body.password);
    }
}
