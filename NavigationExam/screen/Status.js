import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const Status = () => {
  return (
    <View>
      <View style={styles.iconview}>
        <Image
          source={require('../icon/profile.png')}
          resizeMode="contain"
          style={styles.icon}
        />
        <TextInput
          value="Bạn đang nghĩ gì ?"
          style={styles.sectionDescription}
        />
      </View>
      <View style={styles.liveicon}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '600',
              marginRight: 20,
              marginHorizontal: 5,
              marginTop: 5,
              color: '#050505',
            }}>
            Phát trực tiếp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '600',
              marginRight: 20,
              marginHorizontal: 5,
              marginTop: 5,
              color: '#050505',
            }}>
            Ảnh
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '600',
              marginRight: 20,
              marginHorizontal: 5,
              marginTop: 5,
              color: '#050505',
            }}>
            Phòng họp mặt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderWidth: StyleSheet.hairlineWidth,
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
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: 10,
  },
});

export default Status;
