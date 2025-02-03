import { Habit } from './habit';

export type RootStackParamList = {
  Home: undefined;
  AddHabit: undefined;
  HabitDetail: {
    habit: Habit;
  };
}; 