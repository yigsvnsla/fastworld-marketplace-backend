import { AuthService } from './auth.service';
import { Request, Controller, Post, UseGuards, Body } from '@nestjs/common';
import { Public } from 'decorators/public.decorator';
import { LocalAuthGuard } from 'guards/local-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @Public()
  // @UseGuards(LocalAuthGuard)
  @Post()
  public async singin(
    @Body() signInDto: Record<string, any>
  ) {
    return this.authService.singIn(signInDto);
  }
}
