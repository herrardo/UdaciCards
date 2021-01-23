import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigator from './src/components/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import middleware from './src/middleware';
import reducer from './src/reducers';
import 'react-native-gesture-handler';

const App = () => (
  <Provider store={createStore(reducer, middleware)}>
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  </Provider>
);

export default App;
