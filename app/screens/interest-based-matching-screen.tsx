
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const interests = [
  { id: '1', name: 'Hiking' },
  { id: '2', name: 'Playing fetch' },
  { id: '3', name: 'Swimming' },
  { id: '4', name: 'Cuddling' },
  { id: '5', name: 'Napping' },
];

const InterestBasedMatchingScreen = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interestId) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests(selectedInterests.filter((id) => id !== interestId));
    } else {
      setSelectedInterests([...selectedInterests, interestId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your pet's interests:</Text>
      <FlatList
        data={interests}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.interestItem,
              selectedInterests.includes(item.id) && styles.selectedInterestItem,
            ]}
            onPress={() => toggleInterest(item.id)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  interestItem: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  selectedInterestItem: {
    backgroundColor: '#a2d2ff',
    borderColor: '#a2d2ff',
  },
});

export default InterestBasedMatchingScreen;
