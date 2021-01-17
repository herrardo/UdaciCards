import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { handleGetDecks } from './actions';
import PropTypes from 'prop-types';
import Navigator from './components/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { DeckList } from './components/TabNavigator';

function App({ decks, dispatch }) {
  const navigationRef = React.useRef(null);
  useEffect(() => {
    dispatch(handleGetDecks());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </View>
  );
}

App.propTypes = {
  decks: PropTypes.object,
  dispatch: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};
export default connect(mapStateToProps)(App);
