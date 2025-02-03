import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Habit } from '../types/habit';

export default function HabitDetail() {
  const params = useLocalSearchParams();
  const habit: Habit = JSON.parse(params.habit as string);

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
            router.back();
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
}

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