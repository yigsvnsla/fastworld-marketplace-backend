import { Request, Controller, Post, UseGuards } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import AuthService  from './auth.service';
import LocalAuthGuard from '../../guards/local-auth.guard';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post()
  public async singin(@Request() req: any) {
    return this.authService.singin(req.user);
  }
}
