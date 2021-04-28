import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import NewDevice from './NewDevice';
import {useNavigation} from '@react-navigation/native';

function DeviceItem(props) {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <TouchableOpacity
          onPress={() => {
            console.log('TITLE : ' + props.item.title);
            console.log('LOCATION : ' + props.item.location);
            console.log('IMAGE : ' + props.item.image);
            navigation.navigate('DeviceInfo', {
              id: props.item.id,
              title: props.item.title,
              location: props.item.location,
              image: props.item.image,
            });
          }}>
          <Text style={styles.sectionTitle}>
            {props.item.title} - {props.item.location}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function DeviceManagement(props) {
  const {devices, onDeviceClick} = props;
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={devices}
        renderItem={({item, index}) => {
          // console.log(`Item: = ${JSON.stringify(item)}`);
          return <DeviceItem item={item} index={index} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    height: 300,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#90C7DE',
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
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
export default DeviceManagement;
