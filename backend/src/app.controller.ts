import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 👇 AJOUTE CECI POUR QUE LE /health FONCTIONNE
  @Get('health')
  checkHealth() {
    return { status: 'UP', message: 'API is working!' };
  }
}