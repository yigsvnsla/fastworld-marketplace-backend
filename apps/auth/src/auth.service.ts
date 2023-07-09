import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  public getNums(nums: number[]): Observable<number[]> {
    return of(nums);
  }
}
