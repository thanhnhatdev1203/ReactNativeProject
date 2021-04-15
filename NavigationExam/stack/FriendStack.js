import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';
import FiendsScreen from '../screen/Friend';

const Stack = createStackNavigator();

const FriendStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        screenOptions: 'fade',
      }}>
      <Stack.Screen
        name="FRIEND"
        component={FiendsScreen}
        options={{
          title: 'FRIEND',
          headerStyle: {
            backgroundColor: 'burlywood',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default FriendStack;
