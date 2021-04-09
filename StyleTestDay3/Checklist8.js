/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


//BOX MODEL
import React, { Component} from 'react';
import styles from './Styles/styles'
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class Checklist6 extends Component {
    render() {
        return (
            <ScrollView style ={styles.sectionContainer}>
               <Square textType ='sectionContainer' ></Square> 
            </ScrollView>
        );
    }
}
const Square = (props) => {
    const {textType} = props;
    return (
        <Text style={styles[textType]}> HELLOOOOO </Text>
)
}

export default Checklist6;
