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
import ImageShowComponent from "../components/ImageShowComponent";
import { dark } from "../configs/themes";
import ResultEditScreen from "./ResultEditScreen";

export default function DocEditScreen({ children, type = "certificate" }) {
  const initialValues = {
    type: "",
    name: "",
    docNo: "",
    issueDate: "",
    expiryDate: "",
    frontImage: "",
    backImage: "",
    ifsc: "",
    percentage: "",
    percentile: "",
    year: "",
    issuingAuthority: "",
  };

  const handleSubmit = (values) => {
    saveMethods.getObj("userData").then((res) => {
      saveMethods.saveObj("userData", { docs: [values] });
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
