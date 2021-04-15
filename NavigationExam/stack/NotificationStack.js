import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';
import NotificationScreen from '../screen/Notification';

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        screenOptions: 'fade',
      }}>
      <Stack.Screen
        name="NOTIFICATION"
        component={NotificationScreen}
        options={{
          title: 'MY NOTIFICATION',
          headerStyle: {
            backgroundColor: 'darkcyan',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
