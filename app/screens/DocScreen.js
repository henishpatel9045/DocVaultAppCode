import React from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import DocDetailCompo from "../components/DocDetailCompo";
import IconButton from "../components/IconButton";

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
      <AppButton label={"Share"} onPress={() => console.log()} />
      <View style={styles.bottomBtn}>
        <IconButton
          name={"smart-card"}
          label={"Front"}
          size={100}
          onPress={() => console.log()}
        />
        <IconButton
          name={"card-bulleted"}
          label={"Back "}
          size={100}
          onPress={() => console.log()}
        />
      </View>
      <View style={styles.footer}>
        <AppButton
          label={"Delete"}
          bgColor={"tomato"}
          onPress={() => console.log()}
          width={"50%"}
          radius={0}
        />
        <AppButton
          label={"Edit"}
          bgColor={"#5f90f0"}
          onPress={() => console.log()}
          width={"50%"}
          radius={0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    maxHeight: "40%",
  },
  bottomBtn: {
    flexDirection: "row",
    marginVertical: 30,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
  },
});
