import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import HabitDetailScreen from './screens/HabitDetailScreen';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'My Habits' }} 
        />
        <Stack.Screen 
          name="AddHabit" 
          component={AddHabitScreen} 
          options={{ title: 'Add New Habit' }} 
        />
        <Stack.Screen 
          name="HabitDetail" 
          component={HabitDetailScreen} 
          options={{ title: 'Habit Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 