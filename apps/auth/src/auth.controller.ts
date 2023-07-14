import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EventPattern } from '@nestjs/microservices';
import { EventPatterns } from 'common/enum/patterns/event-pattern.enum';

@Controller('test')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @EventPattern(`${EventPatterns.SING_IN}`)
  public singin(req: any) {
    return this.authService.singin(req.user);
  }
}