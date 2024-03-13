import React from 'react';
import { View, Text } from 'react-native';

export default function ExerciseHistoryScreen({ route }) {
  const { newWorkout } = route.params || {};
  const { workouts, selectedUnit } = route.params || {};

  const allWorkouts = workouts ? [...workouts, newWorkout] : [newWorkout];

  return (
    <View>
      <Text>Exercise History</Text>
      {allWorkouts.map((workout, index) => (
        <View key={index}>
          <Text>Sport Type: {workout.sportType}</Text>
          <Text>Distance: {workout.distance} Kilometers</Text>
          <Text>Duration: {workout.duration} Minutes</Text>
          <Text>Date: {workout.date}</Text>
        </View>
      ))}
    </View>
  );
}