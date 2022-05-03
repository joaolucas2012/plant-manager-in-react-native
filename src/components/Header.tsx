import React from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import userImg from "../assets/joaolucas.png";
import colors from "../styles/colors";

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text>Olá,</Text>
                <Text>João Lucas</Text>
            </View>

            <Image source={userImg} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    }
});