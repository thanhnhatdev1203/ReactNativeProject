import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFood} from '../action/food';

const FoodList = () => {
  const dispatch = useDispatch();
  const deleteCurrent = key => dispatch(deleteFood(key));
  const foods = useSelector(state => state.foodReducer.foodList);
  console.log('fooooddddd', foods);
  return (
    <FlatList
      style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={renderItem}
    />
  );
};
const Item = ({item, onPress, textColor}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Icon
      name="delete"
      size={36}
      onPress={() => deleteCurrent(data.item.key)}
    />
  </TouchableOpacity>
);
const renderItem = ({item}) => {
  return <Item item={item} />;
};
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 15,
  },
});
export default FoodList;
