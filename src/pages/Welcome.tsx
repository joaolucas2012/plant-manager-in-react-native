import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import wateringImg from "../assets/watering.png";

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Gerencie suas plantas de forma fácil</Text>
      <Image source={wateringImg} />
      <Text>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
