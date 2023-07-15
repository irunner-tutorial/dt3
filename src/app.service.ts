import { Injectable } from '@nestjs/common';
import { generator } from 'ts-password-generator';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGoodBye(): string {
    return 'Good bye';
  }

  genPass(): string {
    return generator({});
  }
}
