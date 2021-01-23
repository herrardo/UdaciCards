import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { black, red, green, white, light_blue } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

const QuizView = ({ deck, navigation }) => {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(()=>{
    setLocalNotification();
  },[])

  const answerCorrect = () => {
    setCount(count + 1);
    setCorrect(correct + 1);
  };
  const answerIncorrect = () => {
    setCount(count + 1);
  };
  const toggleAns = () => {
    setShowAnswer(!showAnswer);
  };
  const restartQuiz = () => {
    setCount(0);
    setCorrect(0);
    setShowAnswer(false);
  };
  const length = deck.questions.length;
  if (deck.questions.length===0) {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            There isn't any cards on this deck to play the Quiz
          </Text>
        </View>
      </View>
    );
  }
  if (count === deck.questions.length) {
    clearLocalNotification().then(setLocalNotification);
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            You got {correct} out of {length} correct
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.truthyBtn} onPress={restartQuiz}>
            <Text style={styles.truthyBtnText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.falsyBtn}
            onPress={() => navigation.navigate('Deck', { deckId: deck.title })}
          >
            <Text style={styles.falsyBtnText}>Back To Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {count + 1}/{length}
      </Text>
      <View style={styles.textContainer}>
        {!showAnswer && (
          <View>
            <Text style={styles.titleText}>{deck.questions[count].question}</Text>
            <TouchableOpacity onPress={() => toggleAns()}>
              <Text style={styles.flipButton}>Show Answer (Flip card)</Text>
            </TouchableOpacity>
          </View>
        )}
        {showAnswer && (
          <View>
            <Text style={styles.titleText}>{deck.questions[count].answer}</Text>
            <TouchableOpacity onPress={() => toggleAns()}>
              <Text style={styles.flipButton}>Show Question (Flip card)</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.truthyBtn} onPress={answerCorrect}>
          <Text style={styles.truthyBtnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.falsyBtn} onPress={answerIncorrect}>
          <Text style={styles.falsyBtnText}>Incorrect</Text>
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
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  truthyBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    borderColor: white,
    justifyContent: 'center',
  },
  falsyBtn: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    borderColor: white,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    textAlign: 'center',
    color: white,
    marginBottom: 10,
  },
  flipButton: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: white,
    padding: 10,
    color: white,
  },
  truthyBtnText: {
    fontSize: 20,
    alignSelf: 'center',
    color: white,
  },
  falsyBtnText: {
    fontSize: 20,
    alignSelf: 'center',
    color: white,
  },
  counter: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: black,
    padding: 10,
  },
});

QuizView.propTypes = {
  deckId: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
};
function mapStateToProps(state, props) {
  const { deckId } = props.route.params;
  return {
    deck: state[deckId],
  };
}
export default connect(mapStateToProps)(QuizView);
