
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

const SwipeAndMatchScreen = () => {
  const [cards, setCards] = useState([
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: 2,
      interests: ['Playing fetch', 'Swimming', 'Cuddling'],
      personality: 'Friendly and energetic',
      imageUrl: 'https://www.example.com/buddy.jpg',
    },
    {
      name: 'Lucy',
      breed: 'Labrador Retriever',
      age: 3,
      interests: ['Hiking', 'Playing with toys', 'Napping'],
      personality: 'Loyal and playful',
      imageUrl: 'https://www.example.com/lucy.jpg',
    },
    // Add more pet profiles here
  ]);

  const handleYup = (card) => {
    // Handle 'like' action
    console.log(`Liked ${card.name}`);
    // Add matching logic here
  };

  const handleNope = (card) => {
    // Handle 'pass' action
    console.log(`Passed ${card.name}`);
  };

  const Card = ({ name, breed, age, interests, personality, imageUrl }) => (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.breed}>Breed: {breed}</Text>
      <Text style={styles.age}>Age: {age}</Text>
      <Text style={styles.interests}>Interests: {interests.join(', ')}</Text>
      <Text style={styles.personality}>Personality: {personality}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        renderCard={(cardData) => <Card {...cardData} />}
        handleYup={handleYup}
        handleNope={handleNope}
        showYup={false}
        showNope={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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

export default SwipeAndMatchScreen;
