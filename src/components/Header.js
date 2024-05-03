import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {

    const name= "SellPhone";
    const image= require('../../assets/phone_1.jpg');
  return (
    <View style={styles.headerContainer}>
        <View style={styles.ImageAndNameContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60, // You can adjust the height as needed
    width:"100%",
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
    
  },
  imageContainer: {
    width: 40, // Adjust the size of the circular image container
    height: 40, // Adjust the size of the circular image container
    borderRadius: 20, // Make it half of the width and height to make it circular
    overflow: 'hidden', // Clip the content inside
    marginRight: 10, // Add some spacing between the image and text
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  ImageAndNameContainer:
  {
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
  }
});

export default Header;
