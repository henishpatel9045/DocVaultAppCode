import React from "react";
import { StyleSheet, Text, View, TextInput, ToastAndroid } from "react-native";

export default function AppInput({ label, style }) {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.detail}>
        <TextInput style={styles.docNo} placeholder={label} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    marginLeft: 18,
    marginBottom: -13,
  },
  detail: {
    backgroundColor: "white",
    color: "black",
    margin: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "rgba(255,255,255,0.7)",
  },
  docNo: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
