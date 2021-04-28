import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screen/HomeScreen';
import NewDevice from '../screen/NewDevice';
import Header from '../screen/HeaderMain';
import DeviceInfo from '../screen/DeviceInfo';

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
      <Stack.Screen name="NewDevice" component={NewDevice} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
    </Stack.Navigator>
  );
};

export default HomeStack;
