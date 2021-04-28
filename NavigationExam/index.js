/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import NewDevice from './screen/NewDevice';
import DeviceInfo from './screen/DeviceInfo';
import {name as appName} from './app.json';
import HomeScreen from './screen/HomeScreen';
import Tab from './navigation/tabs';
AppRegistry.registerComponent(appName, () => App);
