import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screen/HomeScreen';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'darkolivegreen',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
