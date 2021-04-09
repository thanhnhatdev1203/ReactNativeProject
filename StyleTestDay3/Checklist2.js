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
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 class Checklist2 extends Component {
   render(){
     return( 
       <ScrollView>
        <View style ={[styles.sectionContainer ,{flexDirection : "row" }]}>
           <View style={[styles.view ,{ backgroundColor : 'gray'}]}>
             <Text style = {styles.sectionTitle}>A</Text>
           </View>
           <View style={[styles.view ,{ backgroundColor : 'gray'}]}>
           <Text style = {styles.sectionTitle}>B</Text>
           </View>
           <View style={[styles.view ,{ backgroundColor : 'gray'}]}>
           <Text style = {styles.sectionTitle}>C</Text>
           </View>
           <View style={[styles.view ,{ backgroundColor : 'gray'}]}>
           <Text style = {styles.sectionTitle}>D</Text>
           </View>
           {/* <View style={[styles.view ,{ backgroundColor : 'gray'}]}>
           <Text style = {styles.sectionTitle}></Text>
           </View>
           <View style={[styles.view ,{ backgroundColor : 'gray'}]}>
           <Text style = {styles.sectionTitle}>A</Text>
           </View> */}
          </View>
       </ScrollView>
 
     );
   }
 
 
 }
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     padding : 20,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     textAlign : 'center'
   },
   view: {
     flex : 1 ,
     paddingVertical : 30,
     paddingHorizontal : 30,
     borderWidth : 1,
     borderRadius : 10,
     margin : 5,
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
 
 export default Checklist2;
 