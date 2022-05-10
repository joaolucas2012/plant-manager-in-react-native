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
import { EnvironmentButton } from "../components/EnvironmentButton";
import { PlantCardPrimary } from "../components/PlantCardPrimary";

import api from "../services/api";
import fonts from "../styles/fonts";
import colors from '../styles/colors';

interface EnvironmentProps{
    key: string;
    title: string;
}
interface PlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    };
}

export function PlantSelect(){

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);

    useEffect(() => {
        async function FetchEnvironments(){
            const { data } = await api.get("plants_environments");
            setEnvironments(data);
        }

        FetchEnvironments();
    },[]);

    useEffect(() => {
        async function FetchPlants(){
            const { data } = await api.get("plants");
            setPlants(data);
        }

        FetchPlants();
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
                    renderItem={({item}) => (
                        <EnvironmentButton 
                            title={item.title}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>
            <View style={styles.plants}>
                <FlatList
                    data={plants}
                    renderItem={({item}) => (
                        <PlantCardPrimary 
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
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
        height: 45,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 5,
        paddingLeft: 30,
    },
    plants: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 30,
        justifyContent: 'center',
    },
});