
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const hospitals = [
  {
    id: '1',
    name: 'City Pet Hospital',
    contact: '123-456-7890',
    services: ['Emergency care', 'Vaccinations', 'Surgery'],
  },
  {
    id: '2',
    name: 'Animal Care Clinic',
    contact: '098-765-4321',
    services: ['Dental care', 'Check-ups', 'Grooming'],
  },
];

const HospitalDirectoryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        renderItem={({ item }) => (
          <View style={styles.hospitalItem}>
            <Text style={styles.hospitalName}>{item.name}</Text>
            <Text>Contact: {item.contact}</Text>
            <Text>Services: {item.services.join(', ')}</Text>
          </View>
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
  hospitalItem: {
    marginBottom: 20,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HospitalDirectoryScreen;
