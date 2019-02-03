import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const ScoreBoardScreen = () => (
  <ScrollView style={styles.container}>
    <Text>ScoreBoard</Text>
  </ScrollView>
);

export default ScoreBoardScreen;
