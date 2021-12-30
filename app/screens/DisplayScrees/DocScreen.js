import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import DocDetailCompo from "../../components/DocDetailCompo";
import { dark } from "../../configs/themes";
import ImageScreen from "./ImageScreen";

export default function DocScreen({ data, children }) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{
          height: Dimensions.get("window").height * 0.4,
          width: "100%",
        }}
      >
        <Image source={{ uri: data.frontImage }} style={styles.img} />
      </TouchableOpacity>
      <DocDetailCompo label={"Name"} detail={"PATEL AMRUTBHAI KANUBHAI"} />
      <DocDetailCompo label={"DocNo"} detail={"BIPPP6569KK"} />
      <View style={{ flexDirection: "row" }}>
        <DocDetailCompo label={"IssueDate"} detail={"05-09-2002"} />
        <DocDetailCompo label={"ExpiryDate"} detail={"25-09-2005"} />
      </View>
      {children}
      <AppButton label={"Share"} onPress={() => console.log()} />
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
      <Modal
        style={{
          backgroundColor: dark.primary,
          flex: 1,
          height: Dimensions.get("screen").height,
        }}
        hardwareAccelerated
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <ImageScreen />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
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
