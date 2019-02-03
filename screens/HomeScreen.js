import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import HatchAppPNG from '../assets/images/hatch-app.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});

class HomeScreen extends React.Component {
  static propTypes = {
    isConnected: PropTypes.bool,
  };

  static defaultProps = {
    isConnected: false,
  };

  handleCreatePress = () => {
    const { navigation } = this.props;

    navigation.navigate('GameScreen');
  };

  render() {
    const { isConnected } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={HatchAppPNG}
            style={styles.welcomeImage}
          />
        </View>

        <Button title="Create Game!" disabled={!isConnected} onPress={this.handleCreatePress} />
        {!isConnected && <Text>Check your connection</Text>}
      </View>
    );
  }
}

const mapStore = ({ isConnected }) => ({ isConnected });
const mapActions = () => ({});

export default connect(mapStore, mapActions)(HomeScreen);
