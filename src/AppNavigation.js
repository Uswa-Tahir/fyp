
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './components/HomeStack';
import ProfileStack from './components/ProfileStack';

const Tab = createBottomTabNavigator();

const AppNavigation =() =>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack}  options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileStack}  options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;


