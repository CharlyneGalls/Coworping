import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class GameResult extends Component {
    render () {
        return (
            <View style={style.container}>
                <Text>Victoir joueur 1</Text>
            </View>
        );
    }
}