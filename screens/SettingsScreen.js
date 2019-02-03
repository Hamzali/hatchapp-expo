import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

export default SettingsScreen;
