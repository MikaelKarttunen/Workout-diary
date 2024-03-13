import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [selectedUnit, setSelectedUnit] = useState('km'); 

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Select Unit:</Text>
      <TouchableOpacity onPress={() => handleUnitChange('km')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <MaterialCommunityIcons name={selectedUnit === 'km' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
        <Text style={{ marginLeft: 10 }}>Kilometers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleUnitChange('mi')} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name={selectedUnit === 'mi' ? 'radiobox-marked' : 'radiobox-blank'} size={24} color="black" />
        <Text style={{ marginLeft: 10 }}>Miles</Text>
      </TouchableOpacity>
    </View>
  );
}