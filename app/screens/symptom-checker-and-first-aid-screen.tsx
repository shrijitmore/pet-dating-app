
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SymptomCheckerAndFirstAidScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Symptom Checker</Text>
      <Text style={styles.paragraph}>
        If your pet is exhibiting any of the following symptoms, please contact a veterinarian immediately:
      </Text>
      <Text style={styles.listItem}>- Difficulty breathing</Text>
      <Text style={styles.listItem}>- Seizures</Text>
      <Text style={styles.listItem}>- Unconsciousness</Text>
      <Text style={styles.listItem}>- Severe bleeding</Text>

      <Text style={styles.title}>First Aid</Text>
      <Text style={styles.paragraph}>
        In case of an emergency, here are some basic first aid tips:
      </Text>
      <Text style={styles.subtitle}>Bleeding:</Text>
      <Text style={styles.paragraph}>
        Apply direct pressure to the wound with a clean cloth.
      </Text>
      <Text style={styles.subtitle}>Choking:</Text>
      <Text style={styles.paragraph}>
        Attempt to remove the object from your pet's mouth if it is visible. If not, perform the Heimlich maneuver for pets.
      </Text>
    </ScrollView>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 10,
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default SymptomCheckerAndFirstAidScreen;
