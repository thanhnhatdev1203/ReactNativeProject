import React, {Component} from 'react';
import {Text, TextInput, Button, View, StyleSheet} from 'react-native';
class FoodForm extends Component {
  static navigationOption = {
    title: 'Home',
    headerTintColor: 'white',
    herderStyle: {
      backgroundColor: 'blue',
    },
  };
  state = {
    food: null,
    foodList: [],
  };
  submitFood = food => {
    this.setState({
      foodList: [
        ...this.state.foodList,
        {
          key: Math.random(),
          name: food,
        },
      ],
    });
  };
  deleteFood = key => {
    this.setState({
      foodList: [...this.state.foodList.filter(item => item.key !== key)],
    });
  };
  render() {
    console.log('stateeeeeee', this.state.foodList);
    return (
      <View style={styles.container}>
        <Text> Redux</Text>
        <TextInput
          value={this.state.food}
          placeholder="Name"
          onChangeText={food => this.setState({food})}
        />
        <Button
          title="Submit"
          color="black"
          onPress={() => this.submitFood(this.state.food)}
        />
        <Button
          title="Go to FoodList"
          onPress={() =>
            this.props.navigation.navigate('FoodList', {
              foodList: this.state.foodList,
              deleteFood: this.deleteFood,
            })
          }
        />
      </View>
    );
  }
}
export default FoodForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
