import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionTextEntity } from './optionText.entity';

@Entity('Main_Episode')
export class MainEpisodeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1})
  genre: number;

  @Column({ type: 'text', default: ''})
  mainText: string;

  @OneToMany( type => OptionTextEntity, optiontext => optiontext.mainEpisode )
  options: OptionTextEntity[];
}