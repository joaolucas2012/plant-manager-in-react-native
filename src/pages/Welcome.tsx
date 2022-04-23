import React, { useState } from "react";
import { 
  SafeAreaView,
  Text, 
  Image, 
  TouchableOpacity,
  StyleSheet, 
  Platform,
  Dimensions
} from "react-native";

import { Feather } from '@expo/vector-icons'

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView 
      style={styles.container}
    >
      <Text 
        style={styles.title}
      >
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Text>
      <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text 
        style={styles.subtitle}
      >
        Não esqueça mais de regar suas {"\n"}
        plantas. Nós cuidamos de lembrar você {"\n"}
        sempre que precisar.
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
      >
        <Text>
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    paddingTop: Platform.OS === "android" ? 100 : 0,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 17,
    paddingHorizontal: 7,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
    marginBottom: 50,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});
