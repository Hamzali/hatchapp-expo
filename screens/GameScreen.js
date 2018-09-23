import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'

import {connect} from "react-redux";

import {socketEmit} from "../redux/actions"
import SocketValues from "../constants/SocketValues"

import EmojiKeyboard from "../components/EmojiKeyboard";
import Chat from "../components/Chat";
import GameHeader from "../components/GameHeader";

class GameScreen extends Component {
    _handleOnSend = (message) => this.props.emitSay(message);
    _handleTell = emoji => this.props.emitTell(emoji);

    render() {
        const {room, user, messages} = this.props;
        const isTeller = room.teller === user.id;
        return (
            <View style={styles.container}>
                {
                    user && <GameHeader/>
                }
                {
                    room && user && <Chat
                            userId={user.id}
                            isTeller={isTeller}
                            messages={messages}
                            onSend={this._handleOnSend}/>
                }

                {
                    !(room && user) && <Text>loading</Text>
                }

                {
                    !isTeller && <EmojiKeyboard onEmojiSend={this._handleTell}/>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff'
    }
});

const mapStore = store => ({...store});
const mapActions = dispatch => ({
    emitSay: answer => dispatch(socketEmit(SocketValues.EVENTS.SAY, {answer})),
    emitTell: answer => dispatch(socketEmit(SocketValues.EVENTS.TELL, {answer}))
});

export default connect(mapStore, mapActions)(GameScreen);
