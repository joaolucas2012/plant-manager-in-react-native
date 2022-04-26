import React, { useState } from "react";

import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Button } from "../components/Button";

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.wrapper}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                😃
                            </Text>
                            <Text style={styles.title}>
                                Como podemos {"\n"}
                                chamar você?
                            </Text>
                        </View>
                        <TextInput 
                            style={[
                                styles.input,
                                isFocused && { borderColor: colors.green }
                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
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
    header: {
        alignItems: 'center',
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