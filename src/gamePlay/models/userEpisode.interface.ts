import { OptionTextEntity } from './optionText.entity';

export interface UserEpisode {
  id?: number;
  createAt?: Date;
  mainText?: string;
  like?: number;
  dislike?: number;
  options?: OptionTextEntity[];
}