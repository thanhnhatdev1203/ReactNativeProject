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

class DeviceItem extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
          <TouchableOpacity
            onPress={() => console.log('ID : ' + this.props.item.id)}>
            <Text style={styles.sectionTitle}>
              {this.props.item.title} - {this.props.item.location}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
function DeviceList(props) {
  const {devices, onDeviceClist} = props;
}
function handleClick(device) {
  if (onDeviceClick) {
    onDeviceClick(device);
  }
}

function DeviceManagement(props) {
  const {devices, onDeviceClick} = props;
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={devices}
        renderItem={({item, index}) => {
          console.log(`Item: = ${JSON.stringify(item)}`);
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
    height: 380,
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
