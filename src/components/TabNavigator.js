import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
});

export const DeckList = () => (
  <View style={styles.container}>
    <Text>DECKLIST</Text>
  </View>
);
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
