import React, { useState } from "react";

import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    type Navigation = {
        navigate: (value: string) => void;
    }
    
    // const navigation = useNavigation();
    const { navigate } = useNavigation<Navigation>();

    const handleSubmit = () => {
        navigate("Confirmation");
    }

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputChange = (value: string) => {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    { isFilled ? '😄' : '😀' }
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {"\n"}
                                    chamar você?
                                </Text>
                            </View>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) &&
                                    { borderColor: colors.green }
                                ]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button 
                                    title="Confirmar" 
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    content: {
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