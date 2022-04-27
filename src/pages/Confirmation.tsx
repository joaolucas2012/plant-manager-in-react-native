import React from 'react'

import {
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from "react-native";

import fonts from "../styles/fonts";
import colors from "../styles/colors";
import { Button } from "../components/Button";

export function Confirmation(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.emoji}>
                        😁
                    </Text>
                    <Text style={styles.title}>
                        Prontinho
                    </Text>
                    <Text style={styles.subtitle}>
                        Agora vamos começar a cuidar das suas {'\n'}
                        plantinhas com muito cuidado.
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Button title={"Começar"}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    wrapper: {
        flex: 1,
        width: '100%',
        justifyContent: "space-around",
        alignItems: "center"
    },
    footer: {
        marginTop: 40,
        width: 231
    },
    header: {
        alignItems: "center"
    },
    emoji: {
        fontSize: 60
    },
    title: {
        color: colors.body_dark,
        fontFamily: fonts.heading,
        fontSize: 24,
        textAlign: "center",
        marginTop: 25
    }, 
    subtitle: {
        color: colors.body_dark,
        fontSize: 17,
        textAlign: "center",
        marginTop: 25
    }
});