import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Episode } from './episode.entity';
import { OptionTextEntity } from './optionText.entity';

@Entity('User_Episode')
export class UserEpisodeEntity extends Episode {

  @CreateDateColumn()
  createAt: Date;

  @Column({ default: 0 })
  like: number;

  @Column({ default: 0 })
  dislike: number;

  @OneToMany( type => OptionTextEntity, optiontext => optiontext.userEpisode )
  options: OptionTextEntity[];
}