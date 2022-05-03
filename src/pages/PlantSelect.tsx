import React from 'react';

import {
    View,
    SafeAreaView,
    StyleSheet
} from "react-native";

import { Header } from "../components/Header";

import colors from '../styles/colors';

export function PlantSelect(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Header />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    content: {
        flex: 1,
        backgroundColor: colors.background,
    }
});