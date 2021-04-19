import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NewDevice from './NewDevice';

const HeaderMain = () => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Image
          source={require('../icon/home.png')}
          resizeMode="contain"
          style={[styles.icon]}
        />
        <TouchableOpacity onPress={() => navigator.navigate('NewDevice')}>
          <Image
            source={require('../icon/plus.png')}
            resizeMode="contain"
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 70}}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: '700',
            marginLeft: 10,
          }}>
          Nhà của tôi
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 50,
    marginLeft: 12,
    flexWrap: 'wrap',
  },

  sectionTitle: {
    fontSize: 24,
    marginTop: 43,
    fontWeight: '600',
    color: 'white',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
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
export default HeaderMain;
