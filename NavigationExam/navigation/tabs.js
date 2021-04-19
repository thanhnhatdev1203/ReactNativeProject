import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from '../stack/homeStack';
import WatchStack from '../stack/WatchStack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          right: 0,
          elevation: 0,
          height: 80,
          ...styles.shadow,
          backgroundColor: '#DBF1FD',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconview}>
              <Image
                source={require('../icon/home.png')}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {tintColor: focused ? '#e32f45' : '#748c94'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconview}>
              <Image
                source={require('../icon/watch.png')}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {tintColor: focused ? '#e32f45' : '#748c94'},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconview: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
});
export default Tabs;
