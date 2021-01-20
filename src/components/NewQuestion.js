import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import { connect } from 'react-redux';
import { black, green, light_blue, white } from '../utils/colors';
import { handleSaveCardToDeck } from '../actions';

const NewQuestion = ({ dispatch, navigation, deckId }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const disabled = answer === '' || question === '';
  const handleSave = () => {
    dispatch(
      handleSaveCardToDeck(deckId, {
        question,
        answer,
      }),
    ).then(deck => {
      setQuestion('');
      setAnswer('');
      return navigation.navigate('Deck', { deckId: deckId });
    });
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Insert the question'
          onChangeText={setQuestion}
          value={question}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Insert the answer'
          onChangeText={setAnswer}
          value={answer}
        />
        <TouchableOpacity style={styles.button} disabled={disabled} onPress={handleSave}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: light_blue,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 100,
  },
  textInput: {
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    fontSize: 20,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 100,
    backgroundColor: green,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: white,
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 20,
    alignSelf: 'center',
    color: white,
  },
});

function mapStateToProps(state, props) {
  const { deckId } = props.route.params;

  return {
    deckId,
  };
}
NewQuestion.propTypes = {
  deckId: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
};
export default connect(mapStateToProps)(NewQuestion);
