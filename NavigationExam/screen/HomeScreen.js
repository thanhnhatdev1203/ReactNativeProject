import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import InsetShadow from 'react-native-inset-shadow';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
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
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import NewDevice from './NewDevice';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const HomeScreen = ({}) => {
  const navigation = useNavigation();
  const [device, setDevice] = useState({
    id: '12',
    title: 'Máy quạt',
    image: '123',
    location: 'Phòng khách',
  });
  const loading = async () => {
    try {
      value = await AsyncStorage.getItem('MyDevice').then(asyncData => {
        let jsonObj = JSON.parse(asyncData);
        setDevice(jsonObj);
        console.log('jsonData=========', jsonObj);
      });
    } catch (error) {
      console.log('error==========', error);
    }
  };
  useEffect(() => {
    loading();
  }, []);
  return (
    <View style={{backgroundColor: '#6CC1FE', flex: 1}}>
      <HeaderMain />
      <View style={{flex: 1, flexWrap: 'wrap', marginTop: 50}}>
        <TouchableOpacity onPress={() => navigation.navigate('NewDevice')}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#90C7DE',
              height: 110,
              width: 110,
              borderRadius: 25,
              flexWrap: 'wrap',
              marginRight: 85,
              marginLeft: 40,
              backgroundColor: '#99CEFF',
            }}>
            <Image
              source={require('../icon/plus.png')}
              resizeMode="contain"
              style={[styles.icon]}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '600',
                marginTop: 30,
              }}>
              Thêm thiết bi
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 110,
              width: 110,
              borderRadius: 25,
              borderColor: '#90C7DE',
              backgroundColor: '#99CEFF',
            }}>
            <Image
              source={require('../icon/qr-code.png')}
              resizeMode="contain"
              style={[styles.icon]}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                paddingLeft: 3,
                fontWeight: '600',
                marginTop: 30,
              }}>
              Quét mã QR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <DeviceManagement devices={device} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 9,
    borderRadius: 25,
    backgroundColor: '#A9E0FF',
    paddingHorizontal: 20,
    marginTop: 100,
    width: 300,
    marginBottom: 30,
    marginLeft: 45,
  },

  sectionTitle: {
    fontSize: 24,
    marginTop: 43,
    fontWeight: '600',
    color: 'white',
  },
  icon: {
    width: 27,
    height: 27,
    marginTop: 10,
    marginLeft: 10,
  },
  sectionDescription: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
