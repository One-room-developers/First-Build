import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionTextEntity } from './optionText.entity';

@Entity('User_Episode')
export class UserEpisodeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createAt: Date;

  @Column({ type: 'text', default: '' })
  mainText: string;

  @Column({ default: 0 })
  like: number;

  @Column({ default: 0 })
  dislike: number;

  @OneToMany( type => OptionTextEntity, OptionTextEntity => OptionTextEntity.userEpisode )
  options: OptionTextEntity[];
}