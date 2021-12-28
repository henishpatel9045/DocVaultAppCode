import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInput from "../components/AppInput";
import IconButton from "../components/IconButton";
import AppButton from "../components/AppButton";

export default function DocEditScreen() {
  return (
    <View style={styles.container}>
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
      <AppInput label={"Name"} />
      <AppInput label={"DocNo"} />
      <View style={styles.footer}>
        <AppButton
          label={"Delete"}
          bgColor={"tomato"}
          onPress={() => console.log()}
          width={"50%"}
          radius={0}
        />
        <AppButton
          label={"Save"}
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