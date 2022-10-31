import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowEpisodeController } from './controllers/show-episode.controller';
import { MainEpisodeEntity } from './models/mainEpisode.entity';
import { OptionTextEntity } from './models/optionText.entity';
import { UserEpisodeEntity } from './models/userEpisode.entity';
import { ShowEpisodeService } from './services/show-episode.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainEpisodeEntity, UserEpisodeEntity, OptionTextEntity])],
  providers: [ShowEpisodeService],
  controllers: [ShowEpisodeController],
})
export class ShowEpisodeModule {}
