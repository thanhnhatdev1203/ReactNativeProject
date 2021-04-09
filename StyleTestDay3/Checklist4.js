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

class Checklist4 extends Component {
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start', // flex-end, center,space-between,space-aroud
                alignItems: 'flex-start',
                flexWrap :'wrap',
                marginTop: 50,
            }}>

                
                <View style={{width: 100, height: 100, backgroundColor: 'green', alignSelf: 'flex-start' }}></View>
                <View style={{width: 100, height: 100, backgroundColor: 'blue', alignSelf: 'flex-start' }}></View>
                <View style={{width: 100, height: 100, backgroundColor: 'pink', alignSelf: 'flex-start' }}></View>
                <View style={{width: 100, height: 100, backgroundColor: 'black', alignSelf: 'flex-start' }}></View>
                <View style={{ width: 100, backgroundColor: 'red'}}></View>
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

export default Checklist4;
