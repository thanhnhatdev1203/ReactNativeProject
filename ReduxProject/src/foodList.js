import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';

class FoodList extends Component {
  static navigationOption = {
    title: 'Food List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };
  render() {
    const FData = this.props?.route?.params?.foodList || [];
    const onPressDelete = this.props?.route?.params?.deleteFood || [];
    return (
      <View>
        <TouchableOpacity onPress={onPressDelete}>
          <Text>OK</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.listContainer}
          data={FData}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={({item = {}}) => (
            <RenderItem name={item.name} props={onPressDelete} />
          )}
        />
      </View>
    );
  }
}
const RenderItem = ({name, props}) => {
  return (
    <View style={{margin: 1}}>
      <TouchableOpacity onPress={props}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FoodList;
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
});
