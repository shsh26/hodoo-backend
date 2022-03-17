import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: CreateAuthDto) {
        console.log({ dto });
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}
