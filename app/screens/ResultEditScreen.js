import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInput from "../components/AppInput";
import DocEditScreen from "./DocEditScreen";

export default function ResultEditScreen() {
  return (
    <DocEditScreen>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AppInput label={"RollNo."} style={{ width: "50%" }} />
        <AppInput label={"Year"} style={{ width: "50%" }} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AppInput label={"Percentage"} style={{ width: "50%" }} />
        <AppInput label={"Percentile"} style={{ width: "50%" }} />
      </View>
    </DocEditScreen>
  );
}

const styles = StyleSheet.create({});
