import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import GameScreen from '../screens/GameScreen';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  GameScreen,
}, {
  headerMode: 'none',
});
