

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
// import Header from '../components/Header';
// import HomeImageSlider from '../components/HomeImageSlider';
// import { FontAwesome, FontAwesome6 ,Entypo} from '@expo/vector-icons'; // Import FontAwesome for search icon

// const Home = ({ navigation }) => {
//   const images = [
//     require('../../assets/sampleAd_1.jpg'),
//     require('../../assets/sampleAd_2.jpg'),
//     require('../../assets/sampleAd_3.jpg'),
//     // Add all your image paths here
//   ];

//   // Dummy user data for profile image
//   const user = {
//     name: 'John Doe',
//     profileImage: require('../../assets/phone_1.jpg'), // Change this to the actual profile image
//   };

//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     // Your search logic here, you can use the searchText state
//     console.log('Searching for:', searchText);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       <Header />

//       <HomeImageSlider images={images} />

//       <View style={styles.searchBarContainer}>
//       <View style={styles.profileContainer}>
//           <Image source={user.profileImage} style={styles.profileImage} />
//         </View>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//         <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
//           <FontAwesome name="search" size={24} color="grey" />
//         </TouchableOpacity>
//         </View>

//         <View style={styles.filtersContainer}>
//         <TouchableOpacity style={styles.filterButton}>
//           <View style={styles.filterIcon}>
//             <FontAwesome name="filter" size={24} color="black" />
//             </View>
//             <Text style={styles.filterButtonText}>Filters</Text>
//           </TouchableOpacity>
        
//           <View style={styles.filterButton1}>
//           <View style={styles.filterIcon}>
//             <FontAwesome6 name="location-dot" size={18} color="black" />
//             </View>
//             <Text style={styles.filterButtonText1}>Location</Text>
//             <View style={styles.filterIcon}>
//             <Entypo name="cross" size={18} color="black" />
//             </View>
//           </View>

//           <View style={styles.filterButton1}>
//           <View style={styles.filterIcon}>
//             <FontAwesome name="dollar" size={18} color="black" />
//             </View>
//            <Text style={styles.filterButtonText1}>Price</Text>
//            <View style={styles.filterIcon}>
//             <Entypo name="cross" size={18} color="black" />
//             </View>
//           </View>
//         </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   searchBarContainer: {
//     marginTop: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     width: '95%',
//     borderRadius: 40,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 8,
//     marginLeft:10,
//   },
//   searchIconContainer: {
//     padding: 10,
//   },
//   profileContainer: {
//     width: 40, // Adjust the width and height as needed
//     height: 40, // Adjust the width and height as needed
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   filtersContainer:
//   {
//     borderWidth:1,
//     height:40,
//     width:'100%',
//     borderWidth:1,
//     marginTop:5,
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'center',
//     marginRight: 5,
//     marginLeft:5,
//     borderWidth:1,
//     borderRadius:10,
//     height:40,
//     borderRadius:20,
//   },
//   filterButton1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'center',
//     marginRight: 5,
//     marginLeft:5,
//     borderWidth:1,
//     borderRadius:5,
//     height:25,
//   },
//   filterButtonText: {
//     marginLeft: 10,
//     marginRight:10,
//     color:'grey',
  
//   },
//   filterButtonText1: {
//     marginLeft: 10,
//     //marginRight:10,
//     color:'grey',
  
//   },
//   filterIcon:
//   {
//     marginLeft:10,
//   },
// });

// export default Home;




// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
// import Header from '../components/Header';
// import HomeImageSlider from '../components/HomeImageSlider';
// import { FontAwesome, FontAwesome6, Entypo } from '@expo/vector-icons'; // Import FontAwesome for search icon

// const Home = ({ navigation }) => {
//   const images = [
//     require('../../assets/sampleAd_1.jpg'),
//     require('../../assets/sampleAd_2.jpg'),
//     require('../../assets/sampleAd_3.jpg'),
//     // Add all your image paths here
//   ];

//   // Dummy user data for profile image
//   const user = {
//     name: 'John Doe',
//     profileImage: require('../../assets/phone_1.jpg'), // Change this to the actual profile image
//   };

//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     // Your search logic here, you can use the searchText state
//     console.log('Searching for:', searchText);
//   };

//   // Sample data for circular image touchables
//   const circularImages = [
//     require('../../assets/phone_1.jpg'),
//     require('../../assets/phone_2.jpg'),
//     require('../../assets/phone_3.jpg'),
//     require('../../assets/phone_1.jpg'),
//     require('../../assets/phone_2.jpg'),
//     require('../../assets/phone_3.jpg'),
//     require('../../assets/phone_1.jpg'),
//     require('../../assets/phone_2.jpg'),
//     require('../../assets/phone_3.jpg'),
//     // Add more image paths as needed
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       <Header />

//       <HomeImageSlider images={images} />

//       <View style={styles.searchBarContainer}>
//         <View style={styles.profileContainer}>
//           <Image source={user.profileImage} style={styles.profileImage} />
//         </View>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//         <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
//           <FontAwesome name="search" size={24} color="grey" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.filtersContainer}>
//         <TouchableOpacity style={styles.filterButton}>
//           <View style={styles.filterIcon}>
//             <FontAwesome name="filter" size={24} color="black" />
//           </View>
//           <Text style={styles.filterButtonText}>Filters</Text>
//         </TouchableOpacity>

//         <View style={styles.filterButton1}>
//           <View style={styles.filterIcon}>
//             <FontAwesome6 name="location-dot" size={18} color="black" />
//           </View>
//           <Text style={styles.filterButtonText1}>Location</Text>
//           <View style={styles.filterIcon}>
//             <Entypo name="cross" size={18} color="black" />
//           </View>
//         </View>

//         <View style={styles.filterButton1}>
//           <View style={styles.filterIcon}>
//             <FontAwesome name="dollar" size={18} color="black" />
//           </View>
//           <Text style={styles.filterButtonText1}>Price</Text>
//           <View style={styles.filterIcon}>
//             <Entypo name="cross" size={18} color="black" />
//           </View>
//         </View>
//       </View>

//       {/* Horizontal FlatList container */}
//       <FlatList
//         data={circularImages}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.circularImageTouchable}>
//             <Image source={item} style={styles.circularImage} />
//           </TouchableOpacity>
//         )}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   searchBarContainer: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     width: '95%',
//     borderRadius: 40,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 8,
//     marginLeft: 10,
//   },
//   searchIconContainer: {
//     padding: 10,
//   },
//   profileContainer: {
//     width: 40, // Adjust the width and height as needed
//     height: 40, // Adjust the width and height as needed
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   filtersContainer: {
//     borderWidth: 1,
//     height: 40,
//     width: '100%',
//     borderWidth: 1,
//     marginTop: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 5,
//     marginLeft: 5,
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 40,
//     borderRadius: 20,
//   },
//   filterButton1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 5,
//     marginLeft: 5,
//     borderWidth: 1,
//     borderRadius: 5,
//     height: 25,
//   },
//   filterButtonText: {
//     marginLeft: 10,
//     marginRight: 10,
//     color: 'grey',

//   },
//   filterButtonText1: {
//     marginLeft: 10,
//     //marginRight:10,
//     color: 'grey',

//   },
//   filterIcon: {
//     marginLeft: 10,
//   },
//   circularImageTouchable: {
//     margin: 10,
//     borderRadius: 50,
//     overflow: 'hidden',
//   },
//   circularImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     resizeMode: 'cover',
//   },
// });

// export default Home;


// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
// import Header from '../components/Header';
// import HomeImageSlider from '../components/HomeImageSlider';
// import { FontAwesome, FontAwesome6, Entypo } from '@expo/vector-icons'; // Import FontAwesome for search icon

// const Home = ({ navigation }) => {
//   const images = [
//     require('../../assets/sampleAd_1.jpg'),
//     require('../../assets/sampleAd_2.jpg'),
//     require('../../assets/sampleAd_3.jpg'),
//     // Add all your image paths here
//   ];

//   // Dummy user data for profile image
//   const user = {
//     name: 'John Doe',
//     profileImage: require('../../assets/phone_1.jpg'), // Change this to the actual profile image
//   };

//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     // Your search logic here, you can use the searchText state
//     console.log('Searching for:', searchText);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.card} onPress={() => AdClicked(item.id)}>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.model}>{item.model}</Text>
//         <Text style={styles.price}>{item.price}</Text>
//         <Text style={styles.location}>{item.location}</Text>
//       </View>
//       <View style={styles.icon}>
//         <FontAwesome name='chevron-right' color='black'/>
//       </View>
//     </TouchableOpacity>
//   );


//   // Dummy companies array with id, name, and image properties
//   const companies = [
//     { id: 1, name: 'Company A', image: require('../../assets/phone_1.jpg') },
//     { id: 2, name: 'Company B', image: require('../../assets/phone_2.jpg') },
//     { id: 3, name: 'Company C', image: require('../../assets/phone_3.jpg') },
//     { id: 4, name: 'Company A', image: require('../../assets/phone_1.jpg') },
//     { id: 5, name: 'Company B', image: require('../../assets/phone_2.jpg') },
//     { id: 6, name: 'Company C', image: require('../../assets/phone_3.jpg') },
//     // Add more company data as needed
//   ];

//   const adsData = [
//     { id: 1, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//     { id: 2, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//     { id: 3, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//     { id: 4, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//     { id: 5, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//     { id: 6, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },
//     { id: 7, model: 'Model A', price: '$1000', location: 'Location A', image: require('../../assets/phone_1.jpg') },
//     { id: 8, model: 'Model B', price: '$1500', location: 'Location B', image: require('../../assets/phone_2.jpg') },
//     { id: 9, model: 'Model C', price: '$1200', location: 'Location C', image: require('../../assets/phone_3.jpg') },// Add more ad data as needed
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       <Header />

//       <HomeImageSlider images={images} />

//       <View style={styles.searchBarContainer}>
//         <View style={styles.profileContainer}>
//           <Image source={user.profileImage} style={styles.profileImage} />
//         </View>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//         <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
//           <FontAwesome name="search" size={24} color="grey" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.filtersContainer}>
//         <TouchableOpacity style={styles.filterButton}>
//           <View style={styles.filterIcon}>
//             <FontAwesome name="filter" size={24} color="black" />
//           </View>
//           <Text style={styles.filterButtonText}>Filters</Text>
//         </TouchableOpacity>

//         <View style={styles.filterButton1}>
//           <View style={styles.filterIcon}>
//             <FontAwesome6 name="location-dot" size={18} color="black" />
//           </View>
//           <Text style={styles.filterButtonText1}>Location</Text>
//           <View style={styles.filterIcon}>
//             <Entypo name="cross" size={18} color="black" />
//           </View>
//         </View>

//         <View style={styles.filterButton1}>
//           <View style={styles.filterIcon}>
//             <FontAwesome name="dollar" size={18} color="black" />
//           </View>
//           <Text style={styles.filterButtonText1}>Price</Text>
//           <View style={styles.filterIcon}>
//             <Entypo name="cross" size={18} color="black" />
//           </View>
//         </View>
//       </View>

//       {/* Horizontal FlatList container for company images */}
//       <FlatList
//         data={companies}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.circularImageTouchable}>
//             <Image source={item.image} style={styles.circularImage} />
//           </TouchableOpacity>
//         )}
//          style={styles.HorizontalFlatlistContainer}
//       />


//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   searchBarContainer: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     width: '95%',
//     borderRadius: 40,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 8,
//     marginLeft: 10,
//   },
//   searchIconContainer: {
//     padding: 10,
//   },
//   profileContainer: {
//     width: 40, // Adjust the width and height as needed
//     height: 40, // Adjust the width and height as needed
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   filtersContainer: {
//     borderWidth: 1,
//     height: 40,
//     width: '100%',
//     borderWidth: 1,
//     marginTop: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 5,
//     marginLeft: 5,
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 40,
//     borderRadius: 20,
//   },
//   filterButton1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 5,
//     marginLeft: 5,
//     borderWidth: 1,
//     borderRadius: 5,
//     height: 25,
//   },
//   filterButtonText: {
//     marginLeft: 10,
//     marginRight: 10,
//     color: 'grey',
//   },
//   filterButtonText1: {
//     marginLeft: 10,
//     //marginRight:10,
//     color: 'grey',
//   },
//   filterIcon: {
//     marginLeft: 10,
//   },
//   circularImageTouchable: {
//     margin: 10,
//     borderRadius: 50,
//     overflow: 'hidden',
//   },
//   circularImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     resizeMode: 'cover',
//   },
//   HorizontalFlatlistContainer:
//   {
//     backgroundColor:'grey',
//     height:60,
//   },
// });

// export default Home;

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Header from '../components/Header';
import HomeImageSlider from '../components/HomeImageSlider';
import { FontAwesome, FontAwesome6, Entypo } from '@expo/vector-icons'; // Import FontAwesome for search icon

const Home = ({ navigation }) => {
  const images = [
    require('../../assets/sampleAd_1.jpg'),
    require('../../assets/sampleAd_2.jpg'),
    require('../../assets/sampleAd_3.jpg'),
    // Add all your image paths here
  ];

  // Dummy user data for profile image
  const user = {
    name: 'John Doe',
    profileImage: require('../../assets/phone_1.jpg'), // Change this to the actual profile image
  };

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Your search logic here, you can use the searchText state
    console.log('Searching for:', searchText);
  };

  const AdClicked=(id)=>
  {
    navigation.navigate("PhoneDetail",{id});
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


  // Dummy companies array with id, name, and image properties
  const companies = [
    { id: 1, name: 'Company A', image: require('../../assets/phone_1.jpg') },
    { id: 2, name: 'Company B', image: require('../../assets/phone_2.jpg') },
    { id: 3, name: 'Company C', image: require('../../assets/phone_3.jpg') },
    { id: 4, name: 'Company A', image: require('../../assets/phone_1.jpg') },
    { id: 5, name: 'Company B', image: require('../../assets/phone_2.jpg') },
    { id: 6, name: 'Company C', image: require('../../assets/phone_3.jpg') },
    // Add more company data as needed
  ];

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

  return (
    <View style={styles.container}>

      <Header />

      <HomeImageSlider images={images} />

      <View style={styles.searchBarContainer}>
        <View style={styles.profileContainer}>
          <Image source={user.profileImage} style={styles.profileImage} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <View style={styles.filterIcon}>
            <FontAwesome name="filter" size={24} color="black" />
          </View>
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>

        <View style={styles.filterButton1}>
          <View style={styles.filterIcon}>
            <FontAwesome6 name="location-dot" size={18} color="black" />
          </View>
          <Text style={styles.filterButtonText1}>Location</Text>
          <View style={styles.filterIcon}>
            <Entypo name="cross" size={18} color="black" />
          </View>
        </View>

        <View style={styles.filterButton1}>
          <View style={styles.filterIcon}>
            <FontAwesome name="dollar" size={18} color="black" />
          </View>
          <Text style={styles.filterButtonText1}>Price</Text>
          <View style={styles.filterIcon}>
            <Entypo name="cross" size={18} color="black" />
          </View>
        </View>
      </View>

      {/* Horizontal FlatList container for company images */}
      <FlatList
        data={companies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.circularImageTouchable}>
            <Image source={item.image} style={styles.circularImage} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.HorizontalFlatlistContainer}
      />

      {/* Vertical FlatList container for ads */}
      <FlatList
        data={adsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.flatlist}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchBarContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '95%',
    borderRadius: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    marginLeft: 10,
  },
  searchIconContainer: {
    padding: 10,
  },
  profileContainer: {
    width: 40, // Adjust the width and height as needed
    height: 40, // Adjust the width and height as needed
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  filtersContainer: {
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderRadius: 20,
  },
  filterButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 5,
    height: 25,
  },
  filterButtonText: {
    marginLeft: 10,
    marginRight: 10,
    color: 'grey',
  },
  filterButtonText1: {
    marginLeft: 10,
    //marginRight:10,
    color: 'grey',
  },
  filterIcon: {
    marginLeft: 10,
  },
  circularImageTouchable: {
    margin: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  circularImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  HorizontalFlatlistContainer:
  {
    // backgroundColor:'grey',
    borderWidth:1,
    height:250,
  },
  flatlist: {
    marginTop: 5,
    marginBottom: 5,
    width:'100%',
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

export default Home;



