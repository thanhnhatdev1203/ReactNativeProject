import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';
import MarketplaceScreen from '../screen/Marketplace';

const Stack = createStackNavigator();

const MarketplaceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        screenOptions: 'fade',
      }}>
      <Stack.Screen
        name="MarketPlace"
        component={MarketplaceScreen}
        options={{
          title: 'MY MARKETPLACE',
          headerStyle: {
            backgroundColor: 'cornflowerblue',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MarketplaceStack;
