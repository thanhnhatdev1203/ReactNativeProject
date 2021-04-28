import 'react-native-gesture-handler';
import React from 'react';
import HeaderMain from './HeaderMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  TextInput,
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
function DeviceInfo({route, navigation}) {
  // const {id, title, location, image} = route.params;
  const {id} = route.params;
  const {title} = route.params;
  const {image} = route.params;
  const {location} = route.params;
  removeItemValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };
  removePost = async post_id => {
    try {
      const posts = await AsyncStorage.getItem('MyDevice');
      let postsFav = JSON.parse(posts);

      const postsItems = postsFav.filter(function (e) {
        return e.post_id !== post_id;
      });
      // updating 'posts' with the updated 'postsItems'
      await AsyncStorage.setItem('MyDevice', JSON.stringify(postsItems));
      // console.log(postsItems);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <View style={{backgroundColor: '#6CC1FE', flex: 1}}>
      <HeaderMain />
      <Text style={{marginTop: 20, marginLeft: 10, color: 'white'}}>
        Chi tiết thiết bị :
      </Text>
      <View style={styles.sectionContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20,
            height: 50,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
            }}>
            Tên thiết bị : {title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              marginTop: 10,
            }}>
            Vị trí : {location}
          </Text>
          <View style={{width: 300, height: 130}}>
            <Image
              source={{uri: image}}
              resizeMode="contain"
              style={[styles.icon]}
            />
            <TouchableOpacity onPress={() => removePost('MyDevice')}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  borderRadius: 10,
                  borderWidth: 0.5,
                  height: 30,
                  marginHorizontal: 90,
                  width: 80,
                  backgroundColor: '#A9E0FF',
                }}>
                Xoá
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexWrap: 'wrap', marginTop: 50}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 300,
    height: 300,
    marginLeft: -19,
    alignItems: 'center',
    marginTop: 10,
  },
  sectionContainer: {
    flex: 9,
    borderRadius: 25,
    backgroundColor: '#A9E0FF',
    paddingHorizontal: 20,
    marginTop: 70,
    marginBottom: 60,
    width: 300,
    marginLeft: 45,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
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

export default DeviceInfo;
