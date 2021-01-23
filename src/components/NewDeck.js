import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import { View } from 'react-native-web';
import { black, light_blue, green, white } from '../utils/colors';
import { connect } from 'react-redux';
import { handleSaveDeck } from '../actions';

const NewDeck = ({ dispatch, navigation }) => {
  const [title, setTitle] = useState('');
  const createDeck = () => {
    dispatch(handleSaveDeck(title)).then(deck => {
      setTitle('');
      return navigation.navigate('Deck', { deckId: title });
    });
  };
  return (
    <View>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.titleInput} onChangeText={setTitle} value={title} />
          <TouchableOpacity style={styles.button} onPress={createDeck} disabled={title === ''}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: light_blue,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 100,
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  titleInput: {
    height: 50,
    width: 250,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 4,
    padding: 4,
    fontSize: 20,
    marginBottom: 10,
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
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

NewDeck.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
};

export default connect()(NewDeck);
