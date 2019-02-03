import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import SocketValues from '../constants/SocketValues';

import EmojiKeyboard from '../components/EmojiKeyboard';
import Chat from '../components/Chat';
import GameHeader from '../components/GameHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 30,
  },
});

class GameScreen extends Component {
  static propTypes = {
    emitSay: PropTypes.func.isRequired,
    emitTell: PropTypes.func.isRequired,
    initRoom: PropTypes.func.isRequired,
    room: PropTypes.instanceOf(Object),
    user: PropTypes.instanceOf(Object),
    messages: PropTypes.instanceOf(Array),
    connected: PropTypes.bool,
  };

  static defaultProps = {
    room: null,
    user: null,
    messages: [],
    connected: false,
  };

  componentDidMount() {
    const { initRoom } = this.props;

    initRoom();
  }

  handleOnSend = (message) => {
    const { emitSay } = this.props;

    return emitSay(message);
  };

  handleTell = (emoji) => {
    const { emitTell } = this.props;

    emitTell(emoji);
  };

  render() {
    const {
      room, user, messages, connected,
    } = this.props;
    const loading = room == null || user == null;


    if (!connected) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Check Internet Connection</Text>
        </View>
      );
    }

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <GameHeader hatch={user.hatch} />
        <Chat
          userId={user.id}
          isTeller={room.teller !== user.id}
          messages={messages}
          onSend={this.handleOnSend}
        />
        {
          room.teller === user.id && <EmojiKeyboard onEmojiSend={this.handleTell} />
        }
      </View>
    );
  }
}

const mapStore = ({
  room, user, messages, isConnected,
}) => ({
  room, user, messages, connected: isConnected,
});

const mapActions = () => ({
  emitSay: answer => console.log(SocketValues.EVENTS.SAY, { data: answer }),
  emitTell: answer => console.log(SocketValues.EVENTS.TELL, { answer }),
  initRoom: () => console.log(SocketValues.EVENTS.CONNECT_ROOM),
});

export default connect(mapStore, mapActions)(GameScreen);
