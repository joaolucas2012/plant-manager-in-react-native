import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil</Text>
      <Image source={wateringImg} style={styles.image}/>
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
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
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      paddingTop: Platform.OS === 'android' ? 100 : 0
    },

    subtitle: {
      textAlign: 'center',
      fontSize: 17,
      paddingHorizontal: 7,
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
    },

    buttonText: {
      color: colors.white,
      fontSize: 22
    }
});
