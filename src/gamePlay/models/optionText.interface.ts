import { MainEpisodeEntity } from './mainEpisode.entity';
import { UserEpisodeEntity } from './userEpisode.entity';

export interface OptionText {
  id: number;
  mainText?: string;
  healthChange: number;
  hungryChange: number;
  moneyChange: number;
  strengthChange: number;
  agilityChange: number;
  armorChange: number;
  mentalChange: number;
  mainEpisode?: MainEpisodeEntity;
  userEpisode?: UserEpisodeEntity;
}