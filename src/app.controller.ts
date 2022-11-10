import { Controller, Get, Render } from '@nestjs/common';

@Controller('index')
export class AppController {

  @Get()
  @Render('index')
  root() {
    return;
  }
}
