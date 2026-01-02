
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SwipeAndMatchScreen = () => {
  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe and Match</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>This is a pet profile card.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Like" onPress={() => handleSwipe('right')} />
        <Button title="Nope" onPress={() => handleSwipe('left')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default SwipeAndMatchScreen;
