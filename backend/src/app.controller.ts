import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/tcf') // Préfixe pour toutes les routes
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Route: GET /api/tcf
  @Get()
  getHome() {
    return this.appService.getHello();
  }

  // Route: GET /api/tcf/oral
  @Get('oral')
  async getOralTest() {
    return await this.appService.getOralQuestions();
  }

  // Route: POST /api/tcf/check-answer
  @Post('check-answer')
  async checkAnswer(@Body() body: { choice_id: number }) {
    return await this.appService.checkAnswer(body.choice_id);
  }
}