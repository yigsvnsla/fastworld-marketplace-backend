import { Request, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post()
  public async singin(@Request() req: any) {
    return this.authService.singin(req.user);
  }
}
