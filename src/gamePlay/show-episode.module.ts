import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowEpisodeController } from './controllers/show-episode.controller';
import { MainEpisodeEntity } from './models/mainEpisode.entity';
import { OptionTextEntity } from './models/optionText.entity';
import { UserEpisodeEntity } from './models/userEpisode.entity';
import { ShowEpisodeService } from './services/show-episode.service';
import { CharacterController } from './controllers/character.controller';
import { CharacterModule } from './character.module';

@Module({
  imports: [TypeOrmModule.forFeature([MainEpisodeEntity, UserEpisodeEntity, OptionTextEntity]), CharacterModule],
  providers: [ShowEpisodeService],
  controllers: [ShowEpisodeController, CharacterController],
})
export class ShowEpisodeModule {}
