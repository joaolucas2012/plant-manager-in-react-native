import React from 'react';

import {
    Text,
    StyleSheet,
} from "react-native";
import {
    RectButton,
    RectButtonProps
} from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
    }
}

export function PlantCardPrimary({data, ...rest} : PlantProps){
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo}
                height={110}
                width={70}
            />
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    );
;}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        margin: 10,
        alignItems: 'center',
    },
    text: {
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 16,
    },
});