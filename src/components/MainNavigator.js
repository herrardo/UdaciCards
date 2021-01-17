import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigator';
import Deck from './Deck';

export default function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Tabs} />
      <Stack.Screen name='Deck' component={Deck} />
    </Stack.Navigator>
  );
}
