import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';
import WatchScreen from '../screen/Watch';

const Stack = createStackNavigator();

const WatchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        screenOptions: 'fade',
      }}>
      <Stack.Screen
        name="WATCH"
        component={WatchScreen}
        options={{
          title: 'MY WATCH',
          headerStyle: {
            backgroundColor: 'darkolivegreen',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default WatchStack;
