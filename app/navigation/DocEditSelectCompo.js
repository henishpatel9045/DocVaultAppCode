import React from "react";
import { View, Text } from "react-native";
import CertificateEditScreen from "../screens/CertificateEditScreen";
import DocEditScreen from "../screens/DocEditScreen";
import PassbookScreen from "../screens/PassbookScreen";
import ResultEditScreen from "../screens/ResultEditScreen";

export default function DocEditSelectCompo({ route }) {
  const type = route.params.type;
  if (type === "result") return <ResultEditScreen />;
  else if (type === "passbook") return <PassbookScreen />;
  else if (type === "certificate") return <CertificateEditScreen />;
  else return <DocEditScreen type={type} />;
}
