import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Modal,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import DocDetailCompo from "../../components/DocDetailCompo";
import { dark } from "../../configs/themes";
import AppContext from "../../context/AppContext";
import ImageScreen from "./ImageScreen";
import * as saveMethods from "../../storage/saveToStorage";
import { docImageData } from "../../configs/staticData";
import * as Sharing from "expo-sharing";

export default function DocScreen({ data, children }) {
  const navigation = useNavigation();
  const { getData } = useContext(AppContext);
  const [visible, setVisible] = useState(false);
  const handleDelete = () => {
    saveMethods.getObj("userData").then((res) => {
      let docs = [];
      if (res) {
        res.docs.forEach((item, index) => {
          if (index != data.index) docs.push(item);
        });
        saveMethods.saveObj("userData", { docs: [...docs] });
        getData();
        navigation.navigate("SelectionScreen");
      }
    });
  };

  const handleShare = async () => {
    await Sharing.shareAsync(data.frontImage);
  };

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {data && data?.issueDate && (
            <DocDetailCompo
              label={"IssueDate"}
              detail={data.issueDate}
              width={"50%"}
            />
          )}
          {data && data?.expiryDate != "" && (
            <DocDetailCompo
              label={"ExpiryDate"}
              detail={data.expiryDate}
              width={"50%"}
            />
          )}
        </View>
        {children}
        <AppButton label={"Share"} onPress={handleShare} />
      </ScrollView>
      <View style={styles.footer}>
        <AppButton
          label={"Delete"}
          bgColor={"tomato"}
          onPress={() =>
            Alert.alert("Delete Document", "Are you sure?", [
              { text: "No" },
              { text: "Yes", onPress: () => handleDelete() },
            ])
          }
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
        <ImageScreen
          handleVisible={setVisible}
          image={[
            { url: data?.frontImage },
            { url: data.backImage ? data.backImage : null },
          ]}
          label={docImageData[data.type].title}
        />
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
