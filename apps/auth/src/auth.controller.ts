import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { EventPatterns } from 'common/enum/patterns/event-pattern.enum';
import { ACTION_AUTH } from 'common/enum/actions/actions-auth.enum';

@Controller('test')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @MessagePattern(`${ACTION_AUTH.LOGIN}`)
  public singin(signInDto: Record<string, any>) {
    return this.authService.singin(signInDto);
  }
}