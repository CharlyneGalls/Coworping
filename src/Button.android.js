import React from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';

import style from './Style';

const Button = ({ onPress, label }) => {
    return (
        <TouchableNativeFeedback style={style.button} onPress={onPress}>
            <Text>{label}</Text>
        </TouchableNativeFeedback>
    );
};

export default Button;