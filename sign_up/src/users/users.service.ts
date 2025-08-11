import { Injectable } from '@nestjs/common';

export interface User {
    id: number;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {

    private users: User[] = [];
    private idCounter = 1;

    signup(username: string, password: string) {
        const userExists = this.users.find(u => u.username === username);
        if (userExists) {
            return { success: false, message: '이미 존재하는 사용자입니다.'}
        }
        const newUser = { id: this.idCounter++, username, password };
        this.users.push(newUser);
        return { success: true, message: '회원가입 성공', user: newUser };
    }

    login(username: string, password: string) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (!user) { 
            return { success: false, message: '로그인 실패' }
        };
        return { success: true, message: '로그인 성공', user}
    }
}
