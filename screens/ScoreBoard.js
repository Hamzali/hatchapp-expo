import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class ScoreBoard extends React.Component {
  static navigationOptions = {
    title: 'Score Board',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>ScoreBoard</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
