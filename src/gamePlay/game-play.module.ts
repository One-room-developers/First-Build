import { Module } from '@nestjs/common';
import { GamePlayService } from './game-play.service';
import { GamePlayController } from './game-play.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './entities/episode.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Episode])],
  providers: [GamePlayService],
  controllers: [GamePlayController]
})

export class GamePlayModule {}
