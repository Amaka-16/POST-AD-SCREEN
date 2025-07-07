import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
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
  placeholder = 'Select an option',
}: DropdownPickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.boxLabel}>{label}</Text>

      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        itemTextStyle={styles.itemText}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={items}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={item => onValueChange(item.value)}
        renderRightIcon={() => (
          <Ionicons name="chevron-down" size={20} color="#888" />
        )}
      />
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
  dropdown: {
    height: 40,
    borderColor: 'transparent',
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    borderColor: '#ccc',
    borderRadius: 8,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#888',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  itemText: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  selectionText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});






