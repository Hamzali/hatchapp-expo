import React from 'react';
import { View, Image } from 'react-native';
import {
  RkStyleSheet, RkTextInput, RkText,
} from 'react-native-ui-kitten';

import HatchAppPNG from '../assets/images/hatch-app.png';
import { scaleVertical, scale } from '../utils/scale';

const styles = RkStyleSheet.create(theme => ({
  container: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'space-between',
  },
  register: {
    width: scale(300),
    paddingHorizontal: scaleVertical(20),
  },
}));

const ProfileScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image style={styles.image} source={HatchAppPNG} />
      <RkText rkType="logo h0">Profile</RkText>
      <RkText rkType="light h1">Register</RkText>
    </View>
    <View style={styles.content}>
      <View style={styles.register}>
        <RkTextInput rkType="rounded" placeholder="Nick" />
        <RkTextInput rkType="rounded" placeholder="Password" secureTextEntry />
      </View>
    </View>
  </View>
);

export default ProfileScreen;
