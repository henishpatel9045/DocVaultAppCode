import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DocEditScreen from "./DocEditScreen";
import AppInput from "../../components/AppInput";

export default function CertificateEditScreen() {
  return (
    <DocEditScreen>
      <AppInput label={"Issuing Authority"} />
    </DocEditScreen>
  );
}

const styles = StyleSheet.create({});
