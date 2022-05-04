import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList
} from "react-native";

import { Header } from "../components/Header";

import fonts from "../styles/fonts";
import colors from '../styles/colors';

import { EnvironmentButton } from "../components/EnvironmentButton";

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
            <View>
                <FlatList 
                    data={[1,2,3,4,5]}
                    renderItem={(item) => (
                        <EnvironmentButton title="Quarto" active/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
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
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 30,
        marginVertical: 5,
    }
});