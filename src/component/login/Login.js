import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Tabs from 'react-native-tabs';

import Signin from './Signin';
import Signup from './Signup';
import { gridSystem, colors } from './../../helpers/styles';

const logo = require('./logo.png');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: (gridSystem.gap * 2.5),
    },
    tab: {
        position: 'relative',
        borderBottomColor: colors.brandPrimary,
        borderBottomWidth: .5,
    },
    tabs: {
        opacity: 0.5,
    },
    selectedTab: {
        opacity: 1,
    },
    selectedIconTab: {
        borderBottomColor: colors.brandPrimary,
        borderBottomWidth: 2,
    },
});

export default class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            userChoice: 'signin',
            route: [
                { name: 'signin', desc: `Se connecter` },
                { name: 'signup', desc: `S'inscrire` },
            ]
        };

        this.renderForm = this.renderForm.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
    }

    renderForm () {
        return this.state.userChoice === 'signin' ? <Signin/> : <Signup/>;
    }

    renderTabs () {
        return this.state.route.map((tab, i) => {
            return <Text name={tab.name} key={i} style={styles.tabs}>{tab.desc.toUpperCase()}</Text>
        });
    }

    render () {
        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <Image source={logo} style={styles.image}/>
                {this.renderForm()}
                <Tabs selected={this.state.userChoice} style={styles.tab} selectedStyle={styles.selectedTab}
                      selectedIconStyle={styles.selectedIconTab}
                      onSelect={(tab) => this.setState({ userChoice: tab.props.name })}>
                    {this.renderTabs()}
                </Tabs>
            </KeyboardAwareScrollView>
        );
    }
}