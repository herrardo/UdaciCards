import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication('main', {
    rootTag: document.getElementById('root'),
  });
}
