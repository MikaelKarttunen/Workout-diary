import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddExerciseScreen from './screens/AddExerciseScreen';
import WorkoutListScreen from './screens/WorkoutListScreen';
import SettingsScreen from './screens/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


const WorkoutContext = React.createContext();


export function useWorkouts() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkouts must be used within a WorkoutProvider');
  }
  return context;
}


export default function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    if (workout.distance < 0 || workout.duration < 0) {
      Alert.alert('Error', 'Distance and duration must be positive');
      return;
    }
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
  
            if (route.name === 'Add Exercise') {
              iconName = 'plus-circle-outline';
            } else if (route.name === 'Exercise History') {
              iconName = 'history';
            } else if (route.name === 'Settings') {
              iconName = 'cog-outline';
            }
  
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen name="Add Exercise" component={AddExerciseScreen} />
          <Tab.Screen name="Exercise History" component={WorkoutListScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
}


