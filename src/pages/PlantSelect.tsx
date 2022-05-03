import React from 'react';

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from "react-native";

import { Header } from "../components/Header";

import fonts from "../styles/fonts";
import colors from '../styles/colors';

export function PlantSelect(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Header />
                    <Text style={styles.title}>
                        Em qual ambiente
                    </Text>
                    <Text style={styles.subtitle}>
                        você quer colocar a sua planta?
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
       padding: 30,
    },
    title: {
        fontSize: 17,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 20,
        marginTop:40,
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        color: colors.heading,
    },
});