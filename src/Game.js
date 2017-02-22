import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import GameParty from './GameParty';
import GameScore from './GameScore';
import GameResult from './GameResult';

import style from './Style';

export default class Game extends Component {
    constructor (props) {
        super(props);

        this.state = {
            index: 0
        };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress () {
        const index = this.state.index + 1;
        this.swipper.scrollBy(index);
    }

    render () {
        return (
            <Swiper ref={ref => this.swipper = ref} index={this.state.index} loop={false} scrollEnabled={false}>
                <GameParty data={this.props.data} onPress={this.handlePress}/>
                <GameScore onPress={this.handlePress}/>
                <GameResult />
            </Swiper>
        )
    }
}