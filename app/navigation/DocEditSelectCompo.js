import React from "react";
import { View, Text } from "react-native";
import CertificateEditScreen from "../screens/EditScreens/CertificateEditScreen";
import DocEditScreen from "../screens/EditScreens/DocEditScreen";
import PassbookEditScreen from "../screens/EditScreens/PassbookEditScreen";
import ResultEditScreen from "../screens/EditScreens/ResultEditScreen";

export default function DocEditSelectCompo({ route }) {
  const type = route.params.type;
  if (type === "result") return <ResultEditScreen />;
  else if (type === "passbook") return <PassbookEditScreen />;
  else if (type === "certificate") return <CertificateEditScreen />;
  else return <DocEditScreen type={type} />;
}
