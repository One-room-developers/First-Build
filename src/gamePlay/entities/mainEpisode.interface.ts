import { OptionTextEntity } from './optionText.entity';

export interface MainEpisode {
  id?: number;
  genre?: number;
  title?: string;
  mainText?: string;
  optionTexts?: OptionTextEntity[];
}