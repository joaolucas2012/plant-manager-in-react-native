import React, { Children } from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps){
    return(<></>);
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      height: 60,
      width: 60,
      marginBottom: 50
    },

    buttonText: {
      color: colors.white,
      fontSize: 22
    }
});