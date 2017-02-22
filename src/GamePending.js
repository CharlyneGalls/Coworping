import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './Button'
import style from './Style'

export default class GamePending extends Component {
    constructor (props) {
        super(props)

        this.onPressButton = this.onPressButton.bind(this)
    }

    onPressButton () {
        const data = {
            player1: this.props.data.player1,
            player2: this.props.data.player2,
        }

        Actions.game({ data })
    }

    render () {
        return (
            <View style={style.container}>
                <Text>Prêt pour le match ?</Text>
                <Text>{this.props.data.player1} / {this.props.data.player2}</Text>
                <Button label="Go" onPress={this.onPressButton}/>
            </View>
        );
    }
}