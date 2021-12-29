import { useFormikContext } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInput from "../components/AppInput";
import FormContext from "../storage/formContext";
import DocEditScreen from "./DocEditScreen";

export default function ResultEditScreen() {
  return (
    <DocEditScreen>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AppInput label={"RollNo."} style={{ width: "50%" }} name={"rollNo"} />
        <AppInput label={"Year"} style={{ width: "50%" }} name={"year"} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AppInput hidden label={"result"} name={"type"} />
        <AppInput
          label={"Percentage"}
          style={{ width: "50%" }}
          name={"percentage"}
        />
        <AppInput
          label={"Percentile"}
          style={{ width: "50%" }}
          name={"percentile"}
        />
      </View>
    </DocEditScreen>
  );
}

const styles = StyleSheet.create({});
