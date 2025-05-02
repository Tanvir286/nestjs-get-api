import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  products(): string[] {
    return this.appService.getProducts();
  }

  @Get('/services/list')
  services(): object {
    return this.appService.getServices();
  }

  @Get('/about/us')
  about(): string {
    return this.appService.getAbout();
  }

  @Get('contact')
  contact(): string {
    return this.appService.getContact();
  }
}
