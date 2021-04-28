import React from 'react';
import FoodForm from './src/foodForm';
import 'react-native-gesture-handler';
import FoodList from './src/foodList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/store';

const store = configureStore();
const Stack = createStackNavigator();

export default AppStack = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FoodForm"
          component={FoodForm}
          options={{
            title: 'FoodForm',
            headerTintColor: 'orange',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="FoodList"
          component={FoodList}
          options={{
            headerTintColor: 'orange',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
