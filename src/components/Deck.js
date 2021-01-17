import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { light_blue, white, green } from '../utils/colors';

const Deck = ({ deck, deckId, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckCardsNumber}>{deck.questions.length} cards</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.addCardBtn}
          onPress={() => navigation.navigate('NewQuestion', { deckId })}
        >
          <Text style={styles.addCardBtnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startQuizButton}
          onPress={() => navigation.navigate('QuizView', { deckId })}
        >
          <Text style={styles.startQuizButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: light_blue,
    color: white,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  addCardBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: white,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    justifyContent: 'center',
  },
  startQuizButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: white,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
  },
  deckTitle: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
    color: white,
  },
  deckCardsNumber: {
    fontSize: 30,
    textAlign: 'center',
    color: white,
  },
  addCardBtnText: {
    fontSize: 20,
    alignSelf: 'center',
    color: white,
  },
  startQuizButtonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: white,
  },
});

function mapStateToProps(state, props) {
  const { deckId } = props.route.params;

  return {
    deckId,
    deck: state[deckId],
  };
}

Deck.propTypes = {
  deckId: PropTypes.string,
  deck: PropTypes.object,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Deck);
