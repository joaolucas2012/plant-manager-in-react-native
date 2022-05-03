import React from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import userImg from "../assets/joaolucas.png";
import fonts from "../styles/fonts"
import colors from "../styles/colors";

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>João Lucas</Text>
            </View>
            <Image 
                source={userImg}
                style={styles.userImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 29,
    },
    userName: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 29,
        lineHeight: 40,
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
});