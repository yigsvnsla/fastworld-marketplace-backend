import { Request, Controller, Post, UseGuards, Inject, Body } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';
import AuthService  from './auth.service';
import LocalAuthGuard from '../../guards/local-auth.guard';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('auth')
export default class AuthController {
  constructor(
    private authService: AuthService, 
    @Inject('AUTH_SERVICE') private client: ClientProxy
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post()
  public async singin(@Request() req: any) {
    return this.authService.singin(req.user);
  }

  @Public()
  @Post('test')
  public getNums(@Body('nums') nums: number[]) {
    //console.log(this.client);
    console.log(nums)
    return this.client.emit('nums', nums);
  }
}
