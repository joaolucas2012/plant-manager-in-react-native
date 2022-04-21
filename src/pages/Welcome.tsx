import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie suas plantas de forma fácil</Text>
      <Image source={wateringImg} style={styles.image}/>
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text>
          >
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    title: {
      width: '90%',
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      paddingTop: Platform.OS === 'android' ? 100 : 0
    },

    subtitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading
    },

    button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      height: 60,
      width: 60,
      marginBottom: 50
    },

    image: {
      width: 292,
      height: 284
    }
});
