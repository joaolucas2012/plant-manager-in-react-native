import React, {
    useEffect,
    useState 
} from "react";

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList
} from "react-native";

import { Header } from "../components/Header";
import api from "../services/api";

import fonts from "../styles/fonts";
import colors from '../styles/colors';

import { EnvironmentButton } from "../components/EnvironmentButton";

interface EnvironmentProps {
    key: string;
    title: string;
};

export function PlantSelect(){

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

    useEffect(() => {
        async function fetchEnvironment(){
            const { data } = await api.get('plants_environments');
            setEnvironments(data);
        }

        fetchEnvironment();

    },[]);
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
                    data={environments}
                    renderItem={({ item }) => (
                        <EnvironmentButton 
                            title={item.title}
                        />
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
    },
});