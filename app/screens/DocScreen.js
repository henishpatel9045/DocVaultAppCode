import React from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import DocDetailCompo from "../components/DocDetailCompo";

export default function DocScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/doc1.jpg")}
        style={styles.img}
        resizeMode="stretch"
      />
      <DocDetailCompo label={"Name"} detail={"PATEL AMRUTBHAI KANUBHAI"} />
      <DocDetailCompo label={"DocNo"} detail={"BIPPP6569KK"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    maxHeight: "50%",
  },
});
