import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { GamePlayService } from './game-play.service';

@Controller('game-play')
export class GamePlayController {
  constructor(private readonly gameplayService: GamePlayService) {}

  @Post()
  async create(@Body() createEpisodeDto: CreateEpisodeDTO) {
    return await this.gameplayService.createEpisode(createEpisodeDto);
  }
}
