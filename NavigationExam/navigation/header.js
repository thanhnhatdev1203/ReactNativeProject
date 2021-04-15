import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Header() {
  return <View style={StyleSheet.header}></View>;
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
  },
});
