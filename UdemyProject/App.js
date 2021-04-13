/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Clock() {
  const [timeString, setTimeString] = useState(null);
  const intervalRef = useRef(null);
  useEffect(() => {
    // tuong duong componentdidmount or componentdidupdate khi dependencies empty
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const currentTimeString = `${hours}:${minutes}:${seconds}`;
      setTimeString(currentTimeString);
    }, 1000);
    return () => {
      // tuong duong componentwillunmount
      clearInterval(intervalRef.current);
    };
  });

  return <Text style={styles.sectionContainer}>{timeString}</Text>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magicNumber: 999,
    };
  }

  ClickMe() {
    this.setState({magicNumber: 1});
  }
  render() {
    return (
      <ScrollView style={styles.sectionContainer}>
        <View style={styles.sectionContainer}>
          <Text>{this.state.magicNumber}</Text>
          <TouchableOpacity
            onPress={() => {
              this.ClickMe();
            }}>
            <View style={{width: 100, height: 20, backgroundColor: 'red'}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
function TextInputWithFocusButton() {
  let inputEs = useRef(null);
  const onButtonClick = () => {
    inputEs.current.focus();
  };
  return (
    <View style={styles.sectionContainer}>
      <TextInput
        style={{backgroundColor: 'aqua', paddingVertical: 10}}
        ref={inputEs}
      />
      <TextInput style={{backgroundColor: 'red', paddingVertical: 10}} />

      <Button onPress={onButtonClick} title="click me" />
    </View>
  );
}
function Example() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.sectionContainer}>
      <Text> you click {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me"></Button>
    </View>
  );
}
class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text> you click {this.state.count} times</Text>
        <Button
          onPress={() => this.setState({count: this.state.count + 1})}
          title="Click me"></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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

export default Clock;
