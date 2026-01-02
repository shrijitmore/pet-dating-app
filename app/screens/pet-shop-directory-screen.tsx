
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const petShops = [
  {
    id: '1',
    name: 'Happy Paws Pet Shop',
    products: ['Pet food', 'Toys', 'Leashes'],
    services: ['Grooming', 'Training'],
  },
  {
    id: '2',
    name: 'The Furry Friend',
    products: ['Beds', 'Crates', 'Treats'],
    services: ['Veterinary services'],
  },
];

const PetShopDirectoryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={petShops}
        renderItem={({ item }) => (
          <View style={styles.shopItem}>
            <Text style={styles.shopName}>{item.name}</Text>
            <Text>Products: {item.products.join(', ')}</Text>
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
  shopItem: {
    marginBottom: 20,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PetShopDirectoryScreen;
