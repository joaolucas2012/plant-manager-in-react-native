import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";

import wateringImg from "../assets/watering.png";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Gerencie suas plantas de forma fácil</Text>
      <Image source={wateringImg} />
      <Text>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity>
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
      justifyContent: 'space-between',
      paddingTop: Platform.OS === 'android' ? 100 : 0
    },
});
