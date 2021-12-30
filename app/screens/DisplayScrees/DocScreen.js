import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
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
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, bottom: 50 }}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            height: Dimensions.get("window").height * 0.4,
            width: "100%",
          }}
        >
          <Image source={{ uri: data?.frontImage }} style={styles.img} />
        </TouchableOpacity>
        {data && data?.name != "" && (
          <DocDetailCompo label={"Name"} detail={data.name} />
        )}
        {data && data?.docNo != "" && (
          <DocDetailCompo label={"DocNo"} detail={data.docNo} />
        )}
        <View style={{ flexDirection: "row" }}>
          {data && data?.issueDate && (
            <DocDetailCompo label={"IssueDate"} detail={data.issueDate} />
          )}
          {data && data?.expiryDate != "" && (
            <DocDetailCompo label={"ExpiryDate"} detail={data.expiryDate} />
          )}
        </View>
        {children}
        <AppButton label={"Share"} onPress={() => console.log()} />
      </ScrollView>
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
          onPress={() => {
            navigation.navigate("CreateScreen", data);
          }}
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
    backgroundColor: dark.primary,
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
