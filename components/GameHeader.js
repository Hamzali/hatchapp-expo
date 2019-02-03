import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const GameHeader = ({ hatch, gameLink }) => (
  <View style={styles.container}>
    <Text>{hatch}</Text>
    <Button
      title="copy link"
      onPress={() => console.log('conpy link to clipboard', gameLink)}
    />
  </View>
);

GameHeader.propTypes = {
  hatch: PropTypes.number,
  gameLink: PropTypes.string,
};

GameHeader.defaultProps = {
  hatch: 0,
  gameLink: '',
};

export default GameHeader;
