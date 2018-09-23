import React, {Component, Fragment} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import PropTypes from "prop-types";
import EmojiInput from "react-native-emoji-input";

class EmojiKeyboard extends Component {
    static propTypes = {
        onEmojiSend: PropTypes.func.isRequired
    };
    state = {
        emoji: ""
    };
    _handleEmojiSelection = emoji => {
        this.setState({emoji: this.state.emoji + emoji.char});
    };
    _handleSendEmoji = () => {
        this.props.onEmojiSend(this.state.emoji);
    };
    _handleEmojiReset = () => {
        this.setState({emoji: ""});
    };

    render() {
        return <Fragment>
            <View style={styles.emojiInputContainer}>
                <Text style={styles.emojiInpuText}>{emoji}</Text>
            </View>
            <View style={styles.emojiButtons}>
                <Button
                    title={"Reset"}
                    onPress={this._handleEmojiReset}/>
                <Button
                    title={"Send"}
                    onPress={this._handleSendEmoji}/>
            </View>
            <EmojiInput
                onEmojiSelected={this._handleEmojiSelection}
                emojiFontSize={25}
            />
        </Fragment>
    }
}

const styles = StyleSheet.create({
    emojiButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    emojiInpuText: {
        fontSize: 30
    },
    emojiInputContainer: {
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default EmojiKeyboard
