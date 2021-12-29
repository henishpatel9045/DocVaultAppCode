import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { dark } from "../configs/themes";

export default function DialComponent({ label, onPress, style }) {
  return (
    <TouchableHighlight style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 4,
    shadowColor: "white",
    justifyContent: "center",
  },
  label: {
    color: dark.primary,
    fontWeight: "bold",
    fontSize: 28,
  },
});
