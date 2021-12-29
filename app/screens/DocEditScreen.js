import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppInput from "../components/AppInput";
import IconButton from "../components/IconButton";
import AppButton from "../components/AppButton";
import Screen from "./Screen";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import * as saveMethods from "../storage/saveToStorage";
import FormContext from "../storage/formContext";
import AppForm from "../components/AppForm";

export default function DocEditScreen({ children }) {
  const [formData, setformData] = useState({});

  const initialValues = {
    type: "",
    name: "",
    docNo: "",
    issueDate: "",
    expiryDate: "",
    frontImage: "",
    backImage: "",
    percentage: "",
    percentile: "",
    year: "",
    issuingAuthority: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleRemove = (setFunc) =>
    Alert.alert("Remove Image", "Are you sure?", [
      { text: "Cancle" },
      { text: "Ok", onPress: () => setFunc("") },
    ]);

  return (
    <Screen>
      <AppForm
        values={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        style={{ flex: 1 }}
      >
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
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
          <View style={styles.images}></View>
        </KeyboardAvoidingWrapper>
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
            submit={true}
            onPress={handleSubmit}
            width={"50%"}
            radius={0}
          />
        </View>
      </AppForm>
    </Screen>
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
