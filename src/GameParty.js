import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Button from './Button';

import style from './Style';

export default class Game extends Component {
    render () {
        return (
            <View style={style.container}>
                <Text>{this.props.data.player1}</Text>
                <Text>{this.props.data.player2}</Text>
                <Button label="Terminer" onPress={this.props.onPress}/>
            </View>
        );
    }
}