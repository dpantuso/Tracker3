import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Habit } from '../types/habit';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [habits, setHabits] = React.useState<Habit[]>([]);

  const calculateStreak = (completedDates: string[]) => {
    if (completedDates.length === 0) return 0;
    
    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    const sortedDates = [...completedDates].sort();
    
    for (let i = sortedDates.length - 1; i >= 0; i--) {
      const date = new Date(sortedDates[i]);
      const dateStr = date.toISOString().split('T')[0];
      
      if (i === sortedDates.length - 1 && dateStr !== today) break;
      
      if (i === sortedDates.length - 1 || 
          new Date(sortedDates[i + 1]).getTime() - date.getTime() === 86400000) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.habitItem}
            onPress={() => navigation.navigate('HabitDetail', { habit: item })}
          >
            <View>
              <Text style={styles.habitName}>{item.name}</Text>
              <Text style={styles.streakText}>
                Current streak: {calculateStreak(item.completedDates)} days
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddHabit')}
      >
        <Text style={styles.addButtonText}>+ Add Habit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  habitItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  habitName: {
    fontSize: 18,
    fontWeight: '500',
  },
  streakText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen; 