import React from 'react'

import {
    SafeAreaView,
    View,
    StyleSheet,
    Text
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { Button } from "../components/Button";

import fonts from "../styles/fonts";
import colors from "../styles/colors";

export function Confirmation(){
    type Navigation = {
        navigate: (value: string) => void;
    }
    
    const { navigate } = useNavigation<Navigation>();

    const handleSubmit = () => {
        navigate("PlantSelect");
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
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
                    <Button 
                        title={"Começar"}
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "space-around",
    },
    content: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    header: {
        alignItems: "center"
    },
    emoji: {
        fontSize: 78
    },
    title: {
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 24,
        textAlign: "center",
        marginTop: 40
    }, 
    subtitle: {
        color: colors.heading,
        fontFamily: fonts.text,
        fontSize: 15,
        textAlign: "center",
        marginTop: 16,
    },
    footer: {
        marginTop: 40,
        width: "75%"
    }
});