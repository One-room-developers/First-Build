import { Column, Entity, OneToMany } from 'typeorm';
import { Episode } from './episode.entity';
import { OptionTextEntity } from './optionText.entity';

@Entity('Main_Episode')
export class MainEpisodeEntity extends Episode{

  @Column({ default: 1})
  genre: number;

  @OneToMany( type => OptionTextEntity, optiontext => optiontext.mainEpisode )
  optionTexts: OptionTextEntity[];
}