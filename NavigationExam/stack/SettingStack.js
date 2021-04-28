import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';
import Setting from '../screen/Setting';

const Stack = createStackNavigator();

const WatchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="WATCH"
        component={Setting}
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
