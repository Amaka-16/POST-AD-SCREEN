import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';


interface DropdownPickerProps {
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
  label: string; 
  placeholder?: string;
}

export default function DropdownPicker({
  value,
  onValueChange,
  items,
  label,
  placeholder,
}: DropdownPickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.boxLabel}>{label}</Text>

      <View style={styles.rowPicker}>
        <RNPickerSelect
          onValueChange={onValueChange}
          value={value}
          placeholder={{ label: 'Select Location', value: '' }}
          items={items}
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
        />
        <Ionicons name="chevron-down" size={20} color="#888" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderColor: '#d4d4d8',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 10,
  },
  boxLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#000',
  },
  rowPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    paddingVertical: 8,
  },
  inputAndroid: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    paddingVertical: 8,
  },
  iconContainer: {
    display: 'none', 
  },
});



