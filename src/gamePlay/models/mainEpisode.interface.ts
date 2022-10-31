import { OptionTextEntity } from './optionText.entity';

export interface MainEpisode {
  id?: number;
  genre?: number;
  mainText?: string;
  options?: OptionTextEntity[];
}