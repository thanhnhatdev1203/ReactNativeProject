import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DeviceManagement from './DeviceManagement';
import HeaderMain from './HeaderMain';

const HomeScreen = () => {
  const [deviceList, setDevices] = useState([
    {id: 1, title: 'Màn hình', location: 'Phòng khách'},
    {id: 2, title: 'Bóng đèn', location: 'Nhà vệ sinh'},
    {id: 3, title: 'Laptop', location: 'Phòng thờ'},
    {id: 4, title: 'Bàn', location: 'Phòng ăn'},
    {id: 5, title: 'Ghế', location: 'Phòng làm việc'},
  ]);
  function handleItemsClick() {}
  return (
    <View style={{backgroundColor: '#6CC1FE', flex: 1}}>
      <HeaderMain />
      <View style={styles.sectionContainer}>
        <DeviceManagement devices={deviceList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 5,
    borderRadius: 25,
    backgroundColor: '#A9E0FF',
    paddingHorizontal: 20,
    marginTop: 200,
    width: 300,
    marginLeft: 45,
  },

  sectionTitle: {
    fontSize: 24,
    marginTop: 43,
    fontWeight: '600',
    color: 'white',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
