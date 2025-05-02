import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAbout(): string {
    return 'This is a simple NestJS API!';
  }

  getContact(): string {
    return 'Contact us at support@example.com';
  }

  getProducts(): string[] {
    return ['Product 1', 'Product 2', 'Product 3'];
  }

  getServices(): object {
    return {
      service1: 'Web Development',
      service2: 'App Development',
      service3: 'SEO Optimization',
    };
  }
}
