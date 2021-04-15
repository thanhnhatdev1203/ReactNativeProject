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
const Story = () => {
  return (
    <View style={{height: 190}}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{height: 100}}>
        <TouchableOpacity>
          <View
            style={{
              height: 150,
              width: 100,
              borderWidth: 0,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../icon/avt.jpeg')}
              resizeMode="contain"
              style={styles.iconavt}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 13,
                left: 25,
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              Tạo tin
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 150,
              width: 100,
              marginLeft: 10,
              borderWidth: 0,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../icon/avt.jpeg')}
              resizeMode="contain"
              style={styles.iconavt}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 13,
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              Nguyễn Duy
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 150,
              width: 100,
              borderWidth: 0,
              marginLeft: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../icon/avt.jpeg')}
              resizeMode="contain"
              style={styles.iconavt}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 13,
                left: 15,
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              Thu Hà
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 150,
              width: 100,
              borderWidth: 0,
              marginLeft: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../icon/avt.jpeg')}
              resizeMode="contain"
              style={styles.iconavt}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 13,
                left: 25,
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              Đức Nam
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 0,
              marginLeft: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../icon/avt.jpeg')}
              resizeMode="contain"
              style={styles.iconavt}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 13,
                left: 25,
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              Nhiên
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 150,
              width: 100,
              marginLeft: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../icon/avt.jpeg')}
              resizeMode="contain"
              style={styles.iconavt}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 13,
                left: 25,
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              Cường
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity>
        <View
          style={{
            height: 35,
            margin: 5,
            width: 350,
            borderRadius: 25,
            backgroundColor: '#C6CCE2',
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 9,
              fontSize: 17,
              fontWeight: '700',
              color: '#2470DB',
            }}>
            Hiển thị thêm
          </Text>
        </View>
      </TouchableOpacity>
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
export default Story;
