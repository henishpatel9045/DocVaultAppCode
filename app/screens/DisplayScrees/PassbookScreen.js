import React from "react";
import { View, Text } from "react-native";
import DocDetailCompo from "../../components/DocDetailCompo";
import DocScreen from "./DocScreen";

export default function PassbookScreen({ data }) {
  return (
    <DocScreen data={data}>
      {data && data.ifsc && data.ifsc != "" ? (
        <DocDetailCompo label={"IFSC"} detail={data.ifsc} />
      ) : (
        <View></View>
      )}
    </DocScreen>
  );
}
