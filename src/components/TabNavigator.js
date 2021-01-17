import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import DeckList from './DeckList';

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Decks' component={DeckList} />
      <Tab.Screen name='New Deck' component={DeckList} />
    </Tab.Navigator>
  );
};

export default MyTabs;
