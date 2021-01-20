import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigator';
import Deck from './Deck';
import NewQuestion from './NewQuestion';

export default function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Tabs} />
      <Stack.Screen name='Deck' component={Deck} />
      <Stack.Screen name='New Question' component={NewQuestion} />
    </Stack.Navigator>
  );
}
