import React, { useContext } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppInput from "../../components/AppInput";
import IconButton from "../../components/IconButton";
import AppButton from "../../components/AppButton";
import Screen from "../Screen";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import * as saveMethods from "../../storage/saveToStorage";
import FormContext from "../../storage/formContext";
import AppForm from "../../components/AppForm";
import ImageShowComponent from "../../components/ImageShowComponent";
import { dark } from "../../configs/themes";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

export default function DocEditScreen({
  children,
  type = "certificate",
  data,
}) {
  const initialValues = data
    ? data
    : {
        type: "",
        name: "",
        docNo: "",
        issueDate: "",
        index: -1,
        expiryDate: "",
        frontImage: "",
        backImage: "",
        ifsc: "",
        percentage: "",
        percentile: "",
        year: "",
        issuingAuthority: "",
      };

  const navigation = useNavigation();
  const { getData } = useContext(AppContext);
  const handleSubmit = (values) => {
    if (values.frontImage && values.frontImage != "") {
      saveMethods.getObj("userData").then((res) => {
        let docs = [];
        console.log(values);
        if (res) {
          docs = [...res?.docs];
          if (values.index >= 0) {
            docs[values.index] = values;
          } else {
            docs.push(values);
          }
        } else {
          docs.push(values);
        }
        saveMethods.saveObj("userData", { docs: [...docs] });
        getData();
        navigation.navigate("SelectionScreen");
      });
    } else {
      Alert.alert("Add Image", "Please add photo of front side of image.", [
        { text: "Ok" },
      ]);
    }
  };

  const handleDelete = () => {
    saveMethods.getObj("userData").then((res) => {
      let docs = [];
      if (res) {
        res.docs.forEach((item, index) => {
          if (index != data.index) docs.push(item);
        });
        console.log(data);
        saveMethods.saveObj("userData", { docs: [...docs] });
      }
    });
  };

  return (
    <AppForm
      values={initialValues}
      onSubmit={(values) => handleSubmit(values)}
      style={{ flex: 1, backgroundColor: dark.primary }}
    >
      <AppInput hidden label={type} name={"type"} />
      <KeyboardAvoidingWrapper style={styles.container}>
        <View style={styles.bottomBtn}>
          <IconButton
            iconName={"smart-card"}
            label={"Front"}
            size={100}
            name="frontImage"
          />
          <IconButton
            iconName={"card-bulleted"}
            label={"Back "}
            size={100}
            name="backImage"
          />
        </View>
        <AppInput label={"Name"} name="name" />
        <AppInput label={"DocNo"} name="docNo" />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <AppInput
            placeholder={"dd-mm-yyyy"}
            label={"Issue Date"}
            name="issueDate"
            style={{ width: "50%" }}
          />
          <AppInput
            placeholder={"dd-mm-yyyy"}
            name="expiryDate"
            label={"Expiry Date"}
            style={{ width: "50%" }}
          />
        </View>
        {children}
        <View style={styles.images}>
          <ImageShowComponent name={"frontImage"} />
          <ImageShowComponent name={"backImage"} />
        </View>
      </KeyboardAvoidingWrapper>
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
          label={"Save"}
          bgColor={"#5f90f0"}
          submit={true}
          onPress={handleSubmit}
          width={"50%"}
          radius={0}
        />
      </View>
    </AppForm>
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
  images: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
  },
});
