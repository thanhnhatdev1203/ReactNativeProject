import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
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

const Page = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={(flex = 1)}>
        <Text style={styles.sectionTitle}>PAGE</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 9,
    backgroundColor: 'darkslategrey',
    paddingHorizontal: 10,
  },

  sectionTitle: {
    fontSize: 24,
    marginTop: 43,
    fontWeight: '600',
    color: 'white',
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

export default Page;
