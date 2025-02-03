import { Habit } from './habit';

export type RootStackParamList = {
  '/home': undefined;
  '/add-habit': undefined;
  '/habit-detail': {
    habit: Habit;
  };
}; 