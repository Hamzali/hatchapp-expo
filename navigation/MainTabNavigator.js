import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScoreBoardScreen from '../screens/ScoreBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Home',
  // eslint-disable-next-line
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ScoreBoardStack = createStackNavigator({
  ScoreBoard: ScoreBoardScreen,
});

ScoreBoardStack.navigationOptions = {
  tabBarLabel: 'ScoreBoardScreen',
  title: 'ScoreBoardScreen',
  // eslint-disable-next-line
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  title: 'Settings',
  // eslint-disable-next-line
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ScoreBoardStack,
  HomeStack,
  SettingsStack,
}, {
  initialRouteName: 'HomeStack',
  initialRoute: 'HomeStack',
  header: null,
});
