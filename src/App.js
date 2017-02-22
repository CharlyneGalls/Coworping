import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import PlayerList from './PlayerList'
import GamePending from './GamePending'
import Game from './Game'


export default class App extends Component {
    render () {
        return <Router>
            <Scene key="root">
                <Scene key="player_list" component={PlayerList} title="Player List" sceneStyle={{ flex: 1, paddingTop: 80 }}/>
                <Scene key="game_pending" component={GamePending} title="Game Pending" sceneStyle={{ flex: 1, paddingTop: 80 }}/>
                <Scene key="game" component={Game} title="Game" sceneStyle={{ flex: 1, paddingTop: 80 }}/>
            </Scene>
        </Router>
    }
}