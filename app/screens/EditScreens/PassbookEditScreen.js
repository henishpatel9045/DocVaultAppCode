import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInput from "../../components/AppInput";
import DocEditScreen from "./DocEditScreen";

export default function PassbookEditScreen({ data }) {
  return (
    <DocEditScreen data={data} type={"passbook"}>
      <AppInput label={"IFSC"} />
    </DocEditScreen>
  );
}

const styles = StyleSheet.create({});
