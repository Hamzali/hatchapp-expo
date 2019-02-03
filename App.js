import React from 'react';
import { View } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import {
  AppLoading, Asset, Font, Icon,
} from 'expo';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';
import HatchAppPNG from './assets/images/hatch-app.png';
import SpaceMonoTTF from './assets/fonts/SpaceMono-Regular.ttf';
import RobotoBoldTTF from './assets/fonts/Roboto-Bold.ttf';
import RobotoLightTTF from './assets/fonts/Roboto-Light.ttf';
import RobotoMediumTTF from './assets/fonts/Roboto-Medium.ttf';
import RobotoRegularTTF from './assets/fonts/Roboto-Regular.ttf';
import IcoMoonTTF from './assets/fonts/icomoon.ttf';
import FontAwesomeTTF from './assets/fonts/fontawesome.ttf';
import RighteousRegularTTF from './assets/fonts/Righteous-Regular.ttf';
import bootstrap from './config/bootstrap';

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
}));

bootstrap();

export default class App extends React.Component {
  static propTypes = {
    skipLoadingScreen: PropTypes.bool,
  };

  static defaultProps = {
    skipLoadingScreen: false,
  };

  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([HatchAppPNG]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': SpaceMonoTTF,
      fontawesome: FontAwesomeTTF,
      icomoon: IcoMoonTTF,
      'Righteous-Regular': RighteousRegularTTF,
      'Roboto-Bold': RobotoBoldTTF,
      'Roboto-Medium': RobotoMediumTTF,
      'Roboto-Regular': RobotoRegularTTF,
      'Roboto-Light': RobotoLightTTF,
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { skipLoadingScreen } = this.props;
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
