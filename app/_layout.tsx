import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="home" 
        options={{ 
          title: 'My Habits',
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="add-habit" 
        options={{ 
          title: 'Add New Habit',
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="habit-detail" 
        options={{ 
          title: 'Habit Details',
          headerShown: true,
        }} 
      />
    </Stack>
  );
}
