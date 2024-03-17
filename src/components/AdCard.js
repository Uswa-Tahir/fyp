import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AdCard = ({ model, price, location, image }) => {
  return (
    <TouchableOpacity style={styles.adContainer}>
      <Image source={image} style={styles.adImage} />
      <View style={styles.adDetails}>
        <Text>{model}</Text>
        <Text>{price}</Text>
        <Text>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  adImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  adDetails: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default AdCard;
