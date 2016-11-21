import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text, Alert } from 'react-native';

import { gridSystem, colors, typography } from '../../helpers/styles';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    inputContainer: {
        borderBottomColor: colors.brandPrimary,
        borderBottomWidth: .5,
        marginHorizontal: gridSystem.gap
    },
    input: {
        fontSize: typography.defaultSize,
        height: (gridSystem.gap * 2.25),
        paddingLeft: gridSystem.gap,
        color: colors.greyBase
    },
    button: {
        fontSize: typography.bigSize,
        fontWeight: 'bold',
        color: colors.brandPrimary,
        textAlign: 'center',
        marginTop: (gridSystem.gap * 2.5),
        marginBottom: (gridSystem.gap * 2.75)
    }
});

export default class Signup extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.signup = this.signup.bind(this);
    }

    signup() {
        Alert.alert('Inscription', `L'inscription a réussie`);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'.toUpperCase()}
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>
                <View style={[styles.inputContainer, {marginTop: gridSystem.gap}]}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Choisissez un mot de passe'.toUpperCase()}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableHighlight onPress={this.signup}>
                    <Text style={styles.button}>{'Inscription'.toUpperCase()}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}