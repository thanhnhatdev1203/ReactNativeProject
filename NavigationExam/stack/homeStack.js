import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        screenOptions: 'fade',
      }}>
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          title: 'MY HOME',
          headerStyle: {
            backgroundColor: 'cadetblue',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
