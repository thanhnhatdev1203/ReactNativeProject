import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const Meeting = () => {
  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{height: 40}}>
      <View
        style={{
          width: 110,
          height: 30,
          borderWidth: 1,
          margin: 10,
          borderRadius: 25,
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 10, margin: 7}}>Tạo phòng họp mặt</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
      </View>
      <View
        style={{
          width: 40,
          height: 30,
          margin: 7,
        }}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.avt}
        />
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
  avt: {
    margin: 2,
    width: 30,
    height: 30,
    flexWrap: 'wrap',
    marginRight: 5,
  },
  icon: {
    margin: 10,
    width: 40,
    height: 40,
    flexWrap: 'wrap',
    marginRight: 5,
  },
  iconavt: {
    height: 150,
    width: 97,
    borderRadius: 19,
    paddingBottom: 15,
  },
  liveicon: {
    borderWidth: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconstatus: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: 10,
  },
  iconview: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: 10,
  },
});
export default Meeting;
