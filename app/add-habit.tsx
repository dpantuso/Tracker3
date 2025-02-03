import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';

export default function AddHabit() {
  const [habitName, setHabitName] = useState('');

  const handleCreateHabit = () => {
    if (habitName.trim()) {
      const newHabit = {
        id: Date.now().toString(),
        name: habitName.trim(),
        createdAt: new Date(),
        completedDates: [],
      };
      
      // TODO: Add habit to storage/state
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={habitName}
        onChangeText={setHabitName}
        placeholder="Enter habit name"
        autoFocus
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleCreateHabit}
      >
        <Text style={styles.buttonText}>Create Habit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 