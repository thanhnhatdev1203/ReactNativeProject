import 'react-native-gesture-handler';
import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
  Text,
  TextInput,
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

function Setting() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Cài đặt</Text>
      <Text style={{marginTop: 30}}>TÊN </Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          height: 23,
          width: 330,
          marginVertical: 10,
          marginHorizontal: 5,
          borderRadius: 5,
        }}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#DCDCDC',
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
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

export default Setting;
