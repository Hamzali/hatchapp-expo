import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'

import {connect} from "react-redux";

import {socketEmit} from "../redux/actions"
import SocketValues from "../constants/SocketValues"

import EmojiKeyboard from "../components/EmojiKeyboard";
import Chat from "../components/Chat";
import GameHeader from "../components/GameHeader";

class GameScreen extends Component {
    _handleOnSend = (message) => this
        .props
        .emitSay(message);
    _handleTell = emoji => this
        .props
        .emitTell(emoji);

    componentDidMount() {
        this
            .props
            .initRoom();
    }

    render() {
        const {room, user, messages, connected} = this.props;
        const loading = room == null || user == null;
        

        if (!connected) {
            return (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Check Internet Connection</Text>
                </View>
            )
        }

        if (loading) {
            return (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>loading</Text>
                </View>
            )
        }
        console.log(user.id, room.teller, user.id === room.teller);
        return (
            <View style={styles.container}>
                <GameHeader hatch={user.hatch}/>
                <Chat
                    userId={user.id}
                    isTeller={room.teller !== user.id}
                    messages={messages}
                    onSend={this._handleOnSend}/> 
                {
                    room.teller === user.id && <EmojiKeyboard onEmojiSend={this._handleTell}/>
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
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loadingText: {
        fontSize: 30
    }
});

const mapStore = store => ({room: store.room, user: store.user, messages: store.messages, connected: store.isConnected});
const mapActions = dispatch => ({
    emitSay: answer => dispatch(socketEmit(SocketValues.EVENTS.SAY, {data: answer})),
    emitTell: answer => dispatch(socketEmit(SocketValues.EVENTS.TELL, {answer})),
    initRoom: () => dispatch(socketEmit(SocketValues.EVENTS.CONNECT_ROOM))
});

export default connect(mapStore, mapActions)(GameScreen);
