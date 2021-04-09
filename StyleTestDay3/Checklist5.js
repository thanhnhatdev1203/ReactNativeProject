/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


//BOX MODEL
 import React, { Component } from 'react';
 import type { Node } from 'react';
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
 
 class Checklist5 extends Component {
     render() {
         return (
 
             <View style={{
                 flex: 1,
                 flexDirection: 'row',
                 justifyContent: 'center', // flex-end, center,space-between,space-aroud
                 alignContent: 'center',
                 marginTop: 50,
             }}>
                 <View style={{width: 300, height: 300, backgroundColor: 'green', alignSelf: 'center' }}>
                 <View style={{width: 200, height: 200, backgroundColor: 'blue', alignSelf: 'center', margin : 50 }}>
                 <View style={{width: 100, height: 100, backgroundColor: 'red', alignSelf: 'center', margin : 50 }}>
                 <View style={{width: 50, height: 50, backgroundColor: 'black', alignSelf: 'center', margin : 25 }}>
                    </View>
                     </View>
                     </View>
                 </View>
                 
          </View>
 
         );
     }
 
 
 }
 const styles = StyleSheet.create({
     sectionContainer: {
         marginTop: 32,
         padding: 20,
     },

     sectionTitle: {
         fontSize: 24,
         fontWeight: '600',
         textAlign: 'center',
     },
     view: {
         flex: 1,
         paddingVertical: 30,
         paddingHorizontal: 30,
         borderWidth: 1,
         borderRadius: 10,
         margin: 5,
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
 
 export default Checklist5 ;
 