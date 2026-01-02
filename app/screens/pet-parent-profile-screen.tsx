
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PetParentProfileScreen = () => {
  // Dummy data for a pet parent profile
  const petParent = {
    name: 'John Doe',
    bio: 'Loves spending time outdoors with my furry friend.',
    imageUrl: 'https://www.example.com/john-doe.jpg', // Replace with a real image URL
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: petParent.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{petParent.name}</Text>
      <Text style={styles.bio}>{petParent.bio}</Text>
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
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PetParentProfileScreen;
