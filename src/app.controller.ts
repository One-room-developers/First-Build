import { Controller, Get, Render } from '@nestjs/common';

@Controller('index')
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  home() {
    return;
  }
}
