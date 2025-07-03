import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  images: any[];
  setImages: (imgs: any[]) => void;
}

export default function ImageUpload({ images, setImages }: Props) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permission Denied',
            'We need camera roll permissions to make this work!'
          );
        }
      }
    })();
  }, []);

  const handlePickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = result.assets || [result];
      setImages([...images, ...newImages]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePickImages} style={styles.uploadBox}>
        <MaterialIcons name="collections" size={32} color="#6e6e6e" />
      </TouchableOpacity>

      <View style={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            onLongPress={() => handleDeleteImage(index)}
          >
            <Image source={{ uri: img.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadBox: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
});
