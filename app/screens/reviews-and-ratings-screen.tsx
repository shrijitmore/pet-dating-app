
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const reviews = [
  {
    id: '1',
    product: 'Super Chewy Dog Toy',
    rating: 5,
    comment: 'My dog loves this toy!',
  },
  {
    id: '2',
    product: 'Organic Cat Food',
    rating: 4,
    comment: 'My cat seems to like it.',
  },
];

const ReviewsAndRatingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.productName}>{item.product}</Text>
            <Text>Rating: {item.rating}/5</Text>
            <Text>{item.comment}</Text>
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
  reviewItem: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ReviewsAndRatingsScreen;
