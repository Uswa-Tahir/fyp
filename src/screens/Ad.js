// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const Ad = () => {
//     // Correctly use useNavigation hook to get the navigation object

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Ad Screen</Text>
//             {/* Button onPress should be a function */}
//         </View>
//     );
// }

// export default Ad;


// import React from 'react';
// import { ScrollView,View, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';

// const adsData = [
//   { id: 1, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//   { id: 2, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//   // { id: 3, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//   // { id: 4, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//   // { id: 5, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//   // { id: 6, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//   // { id: 7, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//   // { id: 8, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//   // { id: 9, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },// Add more ad data as needed
// ];

// const Ad = () => {
//   const navigation = useNavigation();

//   const AdClicked=(id)=>
//   {
//     navigation.navigate("PhoneDetail",{id});
//   }
//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.card} onPress={AdClicked}>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.model}>{item.model}</Text>
//         <Text style={styles.price}>{item.price}</Text>
//         <Text style={styles.location}>{item.location}</Text>
//       </View>
//       <View style={styles.icon}>
//       <FontAwesome name='chevron-right' color='black'/>
//       </View>
      
//     </TouchableOpacity>
    
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={adsData}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         style={styles.flatlist}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
  
//   },
//   flatlist:{
//   marginTop:10,
//   marginBottom:10,
//   },
//   card: {
//     flexDirection: 'row',
//     padding: 6,
//     marginVertical: 2,
//     marginHorizontal: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   details: {
//     flex: 1,
//    marginVertical:'auto',
//    marginLeft: 2,
//   },
//   model: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 16,
//     color: 'black',
//   },
//   location: {
//     fontSize: 14,
//     color: '#888',
//   },
//   icon:{
//    alignItems:'center',
//    justifyContent:'center',
//   },
// });

// export default Ad;

import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const adsData = [
  { id: 1, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
  { id: 2, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
  { id: 3, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
  { id: 4, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
  { id: 5, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
  { id: 6, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
  { id: 7, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
  { id: 8, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
  { id: 9, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },// Add more ad data as needed
];

const Ad = () => {
  const navigation = useNavigation();

  const AdClicked = (id) => {
    navigation.navigate("PhoneDetail", { id });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => AdClicked(item.id)}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome name='chevron-right' color='black'/>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={adsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} // Convert id to string for keyExtractor
        style={styles.flatlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 6,
    marginVertical: 2,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    marginVertical: 'auto',
    marginLeft: 2,
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Ad;



// import React from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// const adsData = [
//   { id: 1, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//   { id: 2, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//   { id: 3, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//   { id: 4, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//   { id: 5, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//   { id: 6, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//   { id: 7, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//   { id: 8, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//   { id: 9, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//   // Add more ad data as needed
// ];

// const Ad = () => {
//   const navigation = useNavigation();

//   const AdClicked = (id) => { // Define id parameter here
//     navigation.navigate("PhoneDetail", { id }); // Pass id as a parameter to the PhoneDetail screen
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {adsData.map(ad => (
//         <TouchableOpacity style={styles.card} key={ad.id} onPress={() => AdClicked(ad.id)}>
//           <Image source={ad.image} style={styles.image} />
//           <View style={styles.details}>
//             <Text style={styles.model}>{ad.model}</Text>
//             <Text style={styles.price}>{ad.price}</Text>
//             <Text style={styles.location}>{ad.location}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     flexDirection: 'row',
//     padding: 10,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   details: {
//     flex: 1,
//   },
//   model: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 16,
//     color: '#888',
//   },
//   location: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default Ad;


