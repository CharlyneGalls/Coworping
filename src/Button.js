import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import style from './Style';

const Button = ({ onPress, label }) => {
    return (
        <TouchableHighlight style={style.button} onPress={onPress} underlayColor="#dbe9ed">
            <Text style={{ textAlign: 'center' }}>{label}</Text>
        </TouchableHighlight>
    );
};

export default Button;