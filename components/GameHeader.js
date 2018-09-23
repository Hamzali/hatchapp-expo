import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, StyleSheet, Text, View} from "react-native";


class GameHeader extends Component {
    static propTypes = {
        hatch: PropTypes.number,
        gameLink: PropTypes.string,
        time: PropTypes.number
    };

    static defaultProps = {
        hatch: 0,
        gameLink: "",
        time: 0
    };

    render() {
        const {hatch, gameLink} = this.props;
        return <View style={styles.container}>
            <Text>{hatch}</Text>
            <Button
                title={"copy link"}
                onPress={() => console.log("conpy link to clipboard", gameLink)}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    }
});

export default GameHeader;
