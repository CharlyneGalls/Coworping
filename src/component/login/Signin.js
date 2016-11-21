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
        marginTop: (gridSystem.gap * 2.5)
    },
    buttonPasswordWrapper: {
        borderBottomWidth: 1,
        borderColor: colors.greyLight,
        alignSelf: 'center',
        marginVertical: gridSystem.gap,
        height: (gridSystem.gap * 0.75)
    },
    buttonPassword: {
        fontSize: typography.smallSize,
        color: colors.greyLight,
        textAlign: 'center',
    }
});

export default class Signin extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.signin = this.signin.bind(this);
    }

    signin() {
        Alert.alert('Connexion', 'La connexion a réussie');
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Utilisateur'.toUpperCase()}
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>
                <View style={[styles.inputContainer, {marginTop: gridSystem.gap}]}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Mot de passe'.toUpperCase()}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableHighlight onPress={this.signin}>
                    <Text style={styles.button}>{'Connexion'.toUpperCase()}</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.buttonPasswordWrapper}>
                        <Text style={styles.buttonPassword}>Mot de passe oublié ?</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}