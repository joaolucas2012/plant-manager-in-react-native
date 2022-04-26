import React from "react";

import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Button } from "../components/Button";

export function UserIdentification(){
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            😃
                        </Text>
                        <Text style={styles.title}>
                            Como podemos {"\n"}
                            chamar você?
                        </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite um nome"
                        />
                        <View style={styles.footer}>
                            <Button title="Confirmar" />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: "space-around",
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 54
    },
    emoji: {
        fontSize: 30
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: fonts.heading,
        textAlign: "center",
        color: colors.body_dark,
        marginTop: 17
    },
    input: {
        width: Dimensions.get('window').width * 0.75,
        borderBottomWidth: 1,
        borderColor: colors.grey,
        color: colors.heading,
        fontSize: 17,
        marginTop: 40,
        padding: 10,
        textAlign: "center",
    },
    footer: {
      marginTop: 40,
      width: 231
    }
});