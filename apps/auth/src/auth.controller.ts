import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @EventPattern('nums')
  public getNums(nums: number[]): Observable<number[]> {
    return this.authService.getNums(nums);
  }
}
