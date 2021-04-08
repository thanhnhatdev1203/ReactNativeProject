/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class App extends Component {
  state = {
    counter: 2,
  }
  componentWillMount(){
    console.log(`${Date.now()}. This is componentWillMount`);
}
componentDidMount(){
    console.log(`${Math.floor(Date.now())}. This is componentDidMount`);
}
shouldComponentUpdate(){
    console.log(`${Date.now()}. This is shouldComponentUpdate`);
    return true ;
}
componentWillUpdate(){
    console.log(`${Date.now()}. This is componentWillUpdate`);
}
componentDidUpdate(){
    console.log(`${Date.now()}. This is componentDidUpdate`);
}
  render() {
    const counter = this.state.counter;
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>   Counter : </Text>
        <Text style={styles.sectionDescription}>{counter}</Text>
        <View style={{flexDirection: 'row', marginTop : 20}}>
        <TouchableOpacity onPress={this.OnReduction}>
            <Text style={styles.sectionCacul}> -              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.OnImcrement}>
            <Text style={styles.sectionCacul}> +</Text>
          </TouchableOpacity>
          
        </View>

      </View>
    );
  }
  OnImcrement = () => {
    if(this.state.counter < 10){
    this.setState({
        counter: this.state.counter + 1
    })
  } 
  };
  OnReduction = () => {
    if(this.state.counter > 0){
    this.setState({
      counter: this.state.counter - 1,
    })
  };
}}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 200,
    paddingHorizontal: 24,
    marginHorizontal: 100,
    alignItems: 'center'
  },
  sectionTitle: {
    color : 'green',
    fontSize: 30,
    fontWeight: '600',
  },
  sectionCacul: {
    color : 'green',
    fontSize: 50,
    fontWeight: '600',

  },
  sectionDescription: {
    marginTop: 8,
    color : 'green',
    fontSize: 40,
    fontWeight: '400',
    marginHorizontal: 40,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
