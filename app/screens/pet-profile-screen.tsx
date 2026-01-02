
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PetProfileScreen = () => {
  // Dummy data for a pet profile
  const pet = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 2,
    interests: ['Playing fetch', 'Swimming', 'Cuddling'],
    personality: 'Friendly and energetic',
    imageUrl: 'https://www.example.com/buddy.jpg', // Replace with a real image URL
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{pet.name}</Text>
      <Text style={styles.breed}>Breed: {pet.breed}</Text>
      <Text style={styles.age}>Age: {pet.age}</Text>
      <Text style={styles.interests}>Interests: {pet.interests.join(', ')}</Text>
      <Text style={styles.personality}>Personality: {pet.personality}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  breed: {
    fontSize: 18,
    marginBottom: 5,
  },
  age: {
    fontSize: 18,
    marginBottom: 5,
  },
  interests: {
    fontSize: 18,
    marginBottom: 5,
  },
  personality: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default PetProfileScreen;
