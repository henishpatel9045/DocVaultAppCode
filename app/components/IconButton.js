import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { dark } from "../configs/themes";

export default function IconButton({ name, label, style, size, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={"#ededed"}
      style={[
        styles.container,
        {
          width: size ? size : 50,
          height: size ? size : 50,
          alignItems: "center",
          borderRadius: size ? size / 10 : 5,
          justifyContent: "center",
        },
        style,
      ]}
    >
      <>
        <MaterialCommunityIcons
          name={name}
          size={size ? size - 25 : 30}
          color={dark.primary}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  label: {
    color: dark.primary,
    fontWeight: "bold",
  },
});
