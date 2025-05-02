import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    getRegister(): string {
        return 'Register page';
    }
    getLogin(): string {
        return 'Login page';
    }

}
