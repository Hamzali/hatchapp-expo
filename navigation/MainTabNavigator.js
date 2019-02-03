import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScoreBoardScreen from '../screens/ScoreBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator(
  { Home: HomeScreen },
  {
    headerMode: 'none',
    navigationOptions: { header: null },
  },
);

HomeStack.navigationOptions = {
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

const ScoreBoardStack = createStackNavigator(
  { ScoreBoard: ScoreBoardScreen },
  {
    headerMode: 'none',
    navigationOptions: { header: null },
  },
);

ScoreBoardStack.navigationOptions = {
  tabBarLabel: 'ScoreBoard',
  // eslint-disable-next-line
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator(
  { Settings: SettingsScreen },
  {
    headerMode: 'none',
    navigationOptions: { header: null },
  },
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  // eslint-disable-next-line
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    ScoreBoardStack,
    HomeStack,
    SettingsStack,
  },
  {
    initialRouteName: 'HomeStack',
    initialRoute: 'HomeStack',
  },
);
