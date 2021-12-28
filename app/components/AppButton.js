import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { dark } from "../configs/themes";

export default function AppButton({
  label,
  onPress,
  bgColor,
  style,
  color,
  width,
  radius,
}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={
        bgColor ? "rgba(255, 255, 255, 0.8)" : "rgba(9,240,160, 0.5)"
      }
      style={[
        styles.container,
        style,
        {
          width: width ? width : "90%",
          backgroundColor: bgColor ? bgColor : "#09f0a0",
          borderRadius: radius || radius === 0 ? radius : 10,
        },
      ]}
    >
      <Text style={[styles.label, { color: color ? color : dark.primary }]}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "rgba(9,240,160, 0.9)",
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
