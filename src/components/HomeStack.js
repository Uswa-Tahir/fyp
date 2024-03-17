


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import PhoneDetail from '../screens/PhoneDetail';

const Stack = createNativeStackNavigator();

const HomeStack =() =>{
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneDetail" component={PhoneDetail}/>
        <Stack.Screen name="Chat" component={Chat} />

      </Stack.Navigator>
  );
}

export default HomeStack;


