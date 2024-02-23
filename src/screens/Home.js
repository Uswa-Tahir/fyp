// import React from 'react';
// import { View, Text } from 'react-native';

// const First = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// export default First;

import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First Screen</Text>
      <Button
        title="Go to Phone Details"
        onPress={() => navigation.navigate('PhoneDetail')}
      />
    </View>
  );
}

export default Home;
