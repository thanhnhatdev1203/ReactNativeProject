/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   Dimensions,
 } from 'react-native';
 const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import img from './image/img.png'
 class Checklist7 extends Component {
   render(){
     return( 
         <ScrollView>
        <View style ={[styles.sectionContainer,{flexDirection : "column" }]}>
            <Image source = {img} style = {styles.image}></Image>
          </View>
          </ScrollView>
 
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
   image :{
       maxHeight : windowWidth ,
       maxHeight : windowHeight ,
   }
 });
 
 export default Checklist7;
 