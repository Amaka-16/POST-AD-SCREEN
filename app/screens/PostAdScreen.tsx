import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import DropdownPicker from '../components/DropdownPicker';
import ImageUpload from '../components/ImageUpload';

export default function PostAdScreen() {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [images, setImages] = useState<any[]>([]);

  const isFormValid = category && location && images.length >= 5;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={styles.headerText}>Post an Ad</Text>
          </View>

          <DropdownPicker
            label="Category"
            value={category}
            onValueChange={setCategory}
            placeholder="{{ label: 'Select category', value: '' }}"
            items={[
              { label: 'Electronics', value: 'electronics' },
              { label: 'Fashion', value: 'fashion' },
              { label: 'Furniture', value: 'furniture' },
            ]}
          />

          <DropdownPicker
            label="Location"
            value={location}
            onValueChange={setLocation}
            items={[
              { label: 'Lagos', value: 'lag' },
              { label: 'Abuja', value: 'abj' },
              { label: 'Port Harcourt', value: 'ph' },
            ]}
            placeholder="{{ label: 'Select Location', value: '' }}"
          />
          <View style={styles.inputBox}>
          <Text style={styles.label}>Link</Text>
          <TextInput
            style={styles.input}
            placeholder="A YouTube, Facebook or any link connected to the ad"
            value={link}
            onChangeText={setLink}
          />
          </View>

          <View style={styles.photoTextBox}>
            <Text style={styles.photoText}>
              Add at least 5 images - The first image will be the title image.
            </Text>
            <Text style={styles.photoText}>
              Images must be in .png or .jpeg. Image width must be at least 600px.
            </Text>
          </View>
          
          <ImageUpload images={images} setImages={setImages} />

          <TouchableOpacity
            style={[
              styles.continueButton,
              { backgroundColor: isFormValid ? '#000' : '#e0e0e0' },
            ]}
            disabled={!isFormValid}
            onPress={() => console.log('Continue')}
          >
            <Text
              style={[
                styles.continueText,
                { color: isFormValid ? '#fff' : '#999' },
              ]}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 30, 
  },
  header: {
    flex: 1 ,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  inputBox: {
  flexDirection: 'column',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
  marginBottom: 10,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 15,
    marginRight: 10,
    color: '#555',
  },
  input: {
    padding: 12,
    fontSize: 14,
    flex: 1,
    paddingVertical: 10,
  },
  photoTextBox: {
    marginTop: 20,
    marginBottom: 10,
  },
  photoText: {
    fontSize: 13,
    color: '#6e6e6e',
    marginBottom: 5,
  },
  continueButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
