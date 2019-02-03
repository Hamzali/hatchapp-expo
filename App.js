import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppLoading, Asset, Font, Icon,
} from 'expo';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';
import HatchAppPNG from './assets/images/hatch-app.png';
import SpaceMonoTTF from './assets/fonts/SpaceMono-Regular.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

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
