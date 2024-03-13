import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Calendar } from 'react-native-calendars';

export default function AddExerciseScreen({ navigation }) {
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleAddWorkout = () => {
    if (!sportType || !distance || !duration || !selectedDate) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const workout = {
      sportType,
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      date: selectedDate,
    };

    console.log('Added Workout:', workout);
    setSportType('');
    setDistance('');
    setDuration('');
    setSelectedDate('');
    navigation.navigate('Exercise History', { newWorkout: workout });
  };

  return (
    <View>
      <Text>Select Workout:</Text>
      <SelectDropdown
        
        data={['Running', 'Swimming', 'Cycling', 'Skiing', ]}
        onSelect={(selectedItem, index) => {
          setSportType(selectedItem);
        }}
        buttonStyle={{ height: 50, width: '100%', justifyContent: 'center', borderWidth: 1, borderColor: 'gray', backgroundColor: 'steelblue' }}
        dropdownStyle={{ height: 150 }}
      />
      <Text>Distance (km)</Text>
      <TextInput
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
        placeholder="Enter distance"
      />
      <Text>Duration (min)</Text>
      <TextInput
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
        placeholder="Enter duration"
      />
      <Text>Select Date:</Text>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' }
        }}
      />
      <Button title="Add Workout" onPress={handleAddWorkout} />
    </View>
  );
}