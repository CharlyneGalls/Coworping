import React, { Component } from 'react';
import { ListView, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import style from './Style';

export default class PlayerList extends Component {
    constructor (props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };

        this.renderRow = this.renderRow.bind(this);
    }

    onPressButton (playerName) {
        const data = {
            player1: 'Adfab',
            player2: playerName
        }

        Actions.game_pending({data})
    }

    renderRow (rowData) {
        return (
            <TouchableHighlight onPress={this.onPressButton.bind(this, rowData)} underlayColor="transparent">
                <Text>{rowData}</Text>
            </TouchableHighlight>
        )
    }

    render () {
        return (
            <View style={style.container}>
                <Text>Bonjour Adfab,</Text>
                <Text>Sélectionner votre adversaire :</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    style={style.listView}
                />
            </View>
        );
    }
}