import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { Episode } from './entities/episode.entity';

@Injectable()
export class GamePlayService {

  constructor(
    @InjectRepository(Episode)
    private readonly episodeRepository: Repository<Episode>
  ) {}

  async createEpisode(createEpisodeDto: CreateEpisodeDTO) {
    try {
      const episode = new Episode();

      episode.title = createEpisodeDto.title;
      episode.mainText = createEpisodeDto.mainText;
      episode.optionText1 = createEpisodeDto.optionText1;
      episode.optionText2 = createEpisodeDto.optionText2;
      episode.optionText3 = createEpisodeDto.optionText3;

      await this.episodeRepository.insert(episode);
      return { msg: 'success', successMsg: '에피소드 생성 성공' };
    } catch (err) {
      throw new NotFoundException(`Can't create episode`);
    }
  }
}
