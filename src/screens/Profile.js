// import React from 'react';
// import { View, Text,Button } from 'react-native';

// const Profile = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Profile Screen</Text>
//       <Button title='hello' onPress={()=>navigation.navigate('Ad')}/>
//     </View>
//   );
// }

// export default Profile;



// import React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';

// const Profile = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.profileHeader}>
//         <Image
//           style={styles.profileImage}
//           source={require('../../assets/phone_1.jpg')}
//         />
//         <Text style={styles.username}></Text>
//         <Text style={styles.profileText}>Manage your profile info</Text>
//       </View>
//       <View style={styles.profileDetailsContainer}>

//         {/* Add your profile details here */}
//       </View>
//       {/* <Button title='hello' onPress={() => navigation.navigate('Ad')} /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop:50,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     borderWidth:1,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50, // to make it round
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   profileText: {
//     marginTop: 20,
//     fontSize: 16,
//   },
//   profileDetailsContainer: {
//     marginTop: 20,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// export default Profile;


import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  // Dummy data until you integrate with backend
  const username = "John Doe";
  const profileImageUrl = require('../../assets/phone_1.jpg'); // Assuming you have an image in your assets folder

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={profileImageUrl}
        />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.profileText}>Manage your profile info</Text>
      </View>
      <View style={styles.profileDetailsContainer}>
        {/* Add your profile details here */}
      </View>
      {/* <Button title='hello' onPress={() => navigation.navigate('Ad')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
  },
  profileHeader: {
    alignItems: 'center',
    borderWidth:1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // to make it round
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileText: {
    marginTop: 20,
    fontSize: 16,
  },
  profileDetailsContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default Profile;
