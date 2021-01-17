import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { handleGetDecks } from '../actions';
import AppLoading from 'expo-app-loading';
import { white, light_blue } from '../utils/colors';

const DeckList = ({ dispatch, decks, ready, navigation }) => {
  useEffect(() => {
    dispatch(handleGetDecks());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.deck}
        onPress={() => navigation.navigate('Deck', { deckId: item.title })}
      >
        <View style={styles.deckContainer}>
          <Text style={styles.deckTitle}>{item.title}</Text>
          <Text style={styles.deckCardsNumber}>{item.questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (ready === false) {
    return <AppLoading />;
  }

  if (ready && decks.length === 0) {
    return <Text style={styles.defaultText}>The deck list is empty, please create a new deck</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList data={decks} renderItem={renderItem} keyExtractor={(deck, index) => index.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deck: {
    backgroundColor: light_blue,
    borderRadius: 10,
    borderWidth: 1,
    padding: 30,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'center',
    color: white,
  },
  deckContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 30,
    color: white,
  },
  deckCardsNumber: {
    fontSize: 18,
    color: white,
  },
  defaultText: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 50,
  },
});

function mapStateToProps(decks) {
  return Object.keys(decks).length > 0
    ? {
        decks: Object.keys(decks).map(key => decks[key]),
        ready: true,
      }
    : {
        decks,
        ready: false,
      };
}

export default connect(mapStateToProps)(DeckList);
