import React from 'react';

import {
    View,
    SafeAreaView,
    Text,
    StyleSheet
} from "react-native";

export function PlantSelect(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>
                    Olá, {"\n"}
                    Tiago
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
});