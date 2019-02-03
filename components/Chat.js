import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
    static propTypes = {
      onSend: PropTypes.func.isRequired,
      messages: PropTypes.instanceOf(Array),
      userId: PropTypes.string.isRequired,
      isTeller: PropTypes.bool,
    };

    static defaultProps = {
      messages: [],
      isTeller: false,
    };

    state = {
      messageInput: '',
    };

    handleOnSend = () => {
      const { messageInput } = this.state;
      const { onSend } = this.props;

      onSend(messageInput);
      this.setState({ messageInput: '' });
    };

    handleInputTextChange = v => this.setState({ messageInput: v });

    render() {
      const { messages, userId, isTeller } = this.props;
      const { messageInput } = this.state;
      return (
        <Fragment>
          <GiftedChat
            messages={messages}
            onSend={this.handleOnSend}
            text={messageInput}
            onInputTextChanged={this.handleInputTextChange}
            renderInputToolbar={isTeller ? undefined : () => null}
            user={{
              id: userId,
            }}
          />
          <KeyboardAvoidingView behavior="padding" enabled />
        </Fragment>
      );
    }
}

export default Chat;
