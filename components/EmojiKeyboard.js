import React, { Component, Fragment } from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import EmojiInput from 'react-native-emoji-input';

const styles = StyleSheet.create({
  emojiButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emojiInpuText: {
    fontSize: 30,
  },
  emojiInputContainer: {
    // flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class EmojiKeyboard extends Component {
  static propTypes = {
    onEmojiSend: PropTypes.func.isRequired,
  };

  state = {
    emoji: '',
  };

  handleEmojiSelection = (emoji) => {
    const { emoji: stateEmoji } = this.state;

    this.setState({ emoji: stateEmoji + emoji.char });
  };

  handleSendEmoji = () => {
    const { onEmojiSend } = this.props;
    const { emoji } = this.state;

    onEmojiSend(emoji);
  };

  handleEmojiReset = () => {
    this.setState({ emoji: '' });
  };

  render() {
    const { emoji } = this.state;

    return (
      <Fragment>
        <View style={styles.emojiInputContainer}>
          <Text style={styles.emojiInpuText}>{emoji}</Text>
        </View>
        <View style={styles.emojiButtons}>
          <Button
            title="Reset"
            onPress={this.handleEmojiReset}
          />
          <Button
            title="Send"
            onPress={this.handleSendEmoji}
          />
        </View>
        <EmojiInput
          onEmojiSelected={this.handleEmojiSelection}
          emojiFontSize={25}
        />
      </Fragment>
    );
  }
}

export default EmojiKeyboard;
