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
 
 class Checklist3 extends Component {
   render(){
     return( 
            
           <View style={{
               flex : 1 ,
               flexDirection : 'row',
               justifyContent :'space-around', // flex-end, center,space-between,space-aroud
               marginTop : 50,
           }}>
               <Text style ={{width : 50, height : 50, backgroundColor : 'red'}}></Text>
               <Text style ={{width : 50, height : 50, backgroundColor : 'green'}}></Text>
               <Text style ={{width : 50, height : 50, backgroundColor : 'blue'}}></Text>
           </View>
           
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
 
 export default Checklist3;
 