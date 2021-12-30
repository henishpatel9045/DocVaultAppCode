import React from "react";
import { View, Text } from "react-native";
import DocDetailCompo from "../../components/DocDetailCompo";
import DocScreen from "./DocScreen";

export default function ResultScreen({ data }) {
  return (
    <DocScreen data={data}>
      <View style={{ flexDirection: "row" }}>
        <DocDetailCompo label={"RollNo"} detail={data.rollNo} />
        <DocDetailCompo label={"Year"} detail={data.year} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <DocDetailCompo label={"Percentage"} detail={data.percentage} />
        <DocDetailCompo label={"Percentile"} detail={data.percentile} />
      </View>
    </DocScreen>
  );
}
