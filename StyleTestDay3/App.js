/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
  render(){
    return( 
       <View style ={[styles.sectionContainer,{flexDirection : "column" }]}>
          <View style={[styles.view ,{ backgroundColor : 'red'}]}>
          </View>
          <View style={[styles.view2 ,{ backgroundColor : 'green'}]}>
          </View>
          <View style={[styles.view3 ,{ backgroundColor : 'blue'}]}></View>
         </View>

    );
  }


}
const styles = StyleSheet.create({
  sectionContainer: {
    height : 800,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  view: {
    flex : 20 ,
  },
  view3: {
    height :2,
    height : 123,
  },
  view2: {
    flex : 80,
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

export default App;
