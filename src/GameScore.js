import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Button from './Button';

import style from './Style'

export default class GameScore extends Component {
    render () {
        return (
            <View style={style.container}>
                <Text>Score</Text>
                <Button label="Terminer" onPress={this.props.onPress}/>
            </View>
        );
    }
}