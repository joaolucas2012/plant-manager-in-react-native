import React, { Children } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../styles/colors';

interface ButtonProps {
    title: string;
}

export function Button({ title } : ButtonProps){
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    );
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