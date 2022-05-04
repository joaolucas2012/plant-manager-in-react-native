import React from "react";

import {
    Text,
    StyleSheet
} from "react-native";
import {
    RectButton,
    RectButtonProps
} from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentButton extends RectButtonProps {
    title: string;
    active?: boolean;
};

export function EnvironmentButton({
    title,
    active = false,
    ...rest
} : EnvironmentButton){
    return(
        <RectButton
            style={[
                styles.container,
                active && styles.activeContainer
            ]}
            { ...rest }
        >
            <Text style={[
                styles.text,
                active && styles.activeText
            ]}>
                {title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        marginRight: 10,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: 76,
        height: 40,
        borderRadius: 12,
    },
    activeContainer: {
        backgroundColor: colors.green_light,
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text,
        fontSize: 15,
    },
    activeText: {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
});