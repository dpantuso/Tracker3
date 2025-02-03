import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Habit } from '../types/habit';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type HabitDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HabitDetail'>;
type HabitDetailScreenRouteProp = RouteProp<RootStackParamList, 'HabitDetail'>;

const HabitDetailScreen = () => {
  const navigation = useNavigation<HabitDetailScreenNavigationProp>();
  const route = useRoute<HabitDetailScreenRouteProp>();
  const habit = route.params.habit;

  const handleToggleToday = () => {
    const today = new Date().toISOString().split('T')[0];
    // TODO: Implement toggle completion logic
  };

  const handleDeleteHabit = () => {
    Alert.alert(
      'Delete Habit',
      'Are you sure you want to delete this habit?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            // TODO: Implement delete logic
            navigation.goBack();
          }
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.habitName}>{habit.name}</Text>
      
      <TouchableOpacity 
        style={styles.markButton}
        onPress={handleToggleToday}
      >
        <Text style={styles.markButtonText}>Mark Today as Complete</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={handleDeleteHabit}
      >
        <Text style={styles.deleteButtonText}>Delete Habit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  habitName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  markButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  markButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HabitDetailScreen; 