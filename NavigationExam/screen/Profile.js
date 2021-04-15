import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
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
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Status from './Status';
import Meeting from './Meeting';
import Story from './Story';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={(flex = 1)}>
          <Text style={styles.sectionTitle}>Facebook</Text>
          <Status />
          <Meeting />
        </View>
        <Story />
        <View
          style={{
            backgroundColor: '#E9EBEE',
            height: 10,
          }}></View>
        <View style={styles.iconstatus}>
          <Image
            source={require('../icon/profile.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <View>
            <Text style={{marginTop: 15, fontWeight: '700'}}>Việt Lê</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>3 giờ</Text>
          </View>
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <Image source={require('../icon/avt.jpeg')} style={styles.picture} />
        </View>
        <View style={styles.iconstatus}>
          <Image
            source={require('../icon/profile.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <View>
            <Text style={{marginTop: 15, fontWeight: '700'}}>Việt Lê</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>3 giờ</Text>
          </View>
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <Image source={require('../icon/avt.jpeg')} style={styles.picture} />
        </View>
        <View style={styles.iconstatus}>
          <Image
            source={require('../icon/profile.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <View>
            <Text style={{marginTop: 15, fontWeight: '700'}}>Việt Lê</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>3 giờ</Text>
          </View>
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <Image source={require('../icon/avt.jpeg')} style={styles.picture} />
        </View>
        <View style={styles.iconstatus}>
          <Image
            source={require('../icon/profile.png')}
            resizeMode="contain"
            style={styles.icon}
          />
          <View>
            <Text style={{marginTop: 15, fontWeight: '700'}}>Việt Lê</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>3 giờ</Text>
          </View>
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <Image source={require('../icon/avt.jpeg')} style={styles.picture} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 9,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },

  sectionTitle: {
    fontSize: 24,
    marginTop: 43,
    fontWeight: '600',
    color: '#0986EE',
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    color: '#050505',
  },
  highlight: {
    fontWeight: '700',
  },
  icon: {
    margin: 10,
    width: 40,
    height: 40,
    flexWrap: 'wrap',
    marginRight: 5,
  },
  picture: {
    margin: 10,
    width: 350,
    height: 400,
    flexWrap: 'wrap',
    marginRight: 5,
  },

  iconstatus: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: 10,
  },
});

export default Profile;
