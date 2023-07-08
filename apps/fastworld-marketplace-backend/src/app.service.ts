import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  getHello(): string {
    // const x = 0;

    return 'Hello World!';
  }
}
