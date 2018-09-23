import React from 'react';
import {connect} from "react-redux";
import {
    Image,
    StyleSheet,
    Button,
    View
} from 'react-native';

class HomeScreen extends React.Component {
    _handleCreatePress = () => {
        this.props.navigation.navigate("GameScreen");
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={require('../assets/images/robot-dev.png')}
                        style={styles.welcomeImage}/>
                </View>

                <Button title={"Create Game!"} onPress={this._handleCreatePress}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    }
});

const mapStore = () => ({});
const mapActions = () => ({});

export default connect(mapStore, mapActions)(HomeScreen);
