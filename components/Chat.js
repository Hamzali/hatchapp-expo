import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {KeyboardAvoidingView} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";

class Chat extends Component {
    static propTypes = {
        onSend: PropTypes.func.isRequired,
        messages: PropTypes.array,
        userId: PropTypes.string.isRequired,
        isTeller: PropTypes.bool
    };
    static defaultProps = {
        messages: []
    };
    state = {
        messageInput: ""
    };
    _handleOnSend = () => {
        this.props.onSend(this.state.messageInput);
        this.setState({messageInput: ""});
    };
    _handleInputTextChange = v => this.setState({messageInput: v});

    render() {
        const {messages, userId, isTeller} = this.props;
        const {messageInput} = this.state;
        return <Fragment>
            <GiftedChat
                messages={messages}
                onSend={this._handleOnSend}
                text={messageInput}
                onInputTextChanged={this._handleInputTextChange}
                renderInputToolbar={isTeller ? undefined : () => null}
                user={{
                    id: userId
                }}/>
            <KeyboardAvoidingView behavior="padding" enabled/>
        </Fragment>
    }
}

export default Chat;
