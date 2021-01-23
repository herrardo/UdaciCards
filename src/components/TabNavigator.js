import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import DeckList from './DeckList';
import NewDeck from './NewDeck';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Decks' component={DeckList} />
      <Tab.Screen name='NewDeck' component={NewDeck} />
    </Tab.Navigator>
  );
};

export default Tabs;
