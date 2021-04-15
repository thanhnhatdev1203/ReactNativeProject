import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import Profile from '../screen/Profile';
import Page from '../screen/Page';
import Group from '../screen/Group';
import Game from '../screen/Game';

const Drawer = createDrawerNavigator();
const HomeStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Page" component={Page} />
      <Drawer.Screen name="Group" component={Group} />
      <Drawer.Screen name="Game" component={Game} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
