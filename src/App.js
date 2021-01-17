import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from './components/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App({ decks, dispatch }) {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
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
