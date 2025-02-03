import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type AddHabitScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddHabit'>;

const AddHabitScreen = () => {
  const [habitName, setHabitName] = useState('');
  const navigation = useNavigation<AddHabitScreenNavigationProp>();

  const handleCreateHabit = () => {
    if (habitName.trim()) {
      const newHabit = {
        id: Date.now().toString(),
        name: habitName.trim(),
        createdAt: new Date(),
        completedDates: [],
      };
      
      // TODO: Add habit to storage/state
      navigation.goBack();
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
};

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

export default AddHabitScreen; 