import React from 'react';
import { View, StyleSheet } from 'react-native';

import Login from './component/login/Login';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class App extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Login/>
            </View>
        );
    }
}