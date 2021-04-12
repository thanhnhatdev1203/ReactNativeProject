/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


//BOX MODEL
import React, { Component} from 'react';

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
            <ScrollView>
                <View>
                    <View style={{
                        flex: 1,
                    }}>

                        <View style={styles.red1}>
                            <View style={styles.blue1}>
                                <View style={styles.green1}></View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 200,
                    }}>
                        <View style={styles.red2} />
                        <View style={styles.blue2} />
                        <View style={styles.green2} />
                    </View>
                </View>
                <View style={{
                    marginTop: 200,
                    marginBottom: 200,
                }}>
                    <View style={styles.red3} />
                    <View style={styles.yellow} />
                    <View style={styles.blue3} />
                </View>
            </ScrollView>
        );
    }


}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        padding: 20,
    },
    red1: {
        width: 150,
        height: 150,
        marginTop: 100,
        backgroundColor: 'red',
    },
    red2:{
        width: 150, height: 150, backgroundColor: 'red' ,
    },
    blue1 :{     
            width: 150, height: 150, backgroundColor: 'blue', alignSelf: 'flex-start',
            position: 'absolute',
            top: 75,
            left: 75,
    },
    blue2 :{
        width: 150, height: 150, backgroundColor: 'blue',
        position: 'absolute',
        top: 75,
        left: 75,
        zIndex: 1
    },
    green1 : {
        width: 150, height: 150, backgroundColor: 'green', alignSelf: 'flex-start',
        position: 'absolute',
        top: 75,
        left: 75
    },
    green2 : {
        width: 150, height: 150, backgroundColor: 'green',
        position: 'absolute',
        top: 150,
        left: 150,
    },
    red3 : { width: 150, height: 150, backgroundColor: 'red' },
    yellow : {
        width: 70, height: 70, backgroundColor: 'yellow',
        position: 'absolute',
        top: 60,
        borderRadius: 100,
        left: 60,
    },
    blue3 : {
        width: 150, height: 150, backgroundColor: 'blue',
        position: 'absolute',
        top: 95,
        left: 95,
    }
});

export default Checklist6;
