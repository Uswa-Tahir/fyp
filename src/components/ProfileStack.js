


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Ad from '../screens/Ad';

const Stack2 = createNativeStackNavigator();

const ProfileStack =() =>{
  return (
      <Stack2.Navigator>
        <Stack2.Screen name="ProfileScreen" component={Profile} />
        <Stack2.Screen name="Ad" component={Ad} />

      </Stack2.Navigator>
  );
}

export default ProfileStack;


