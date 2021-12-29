import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { dark } from "../configs/themes";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

export default function IconButton({ iconName, label, style, size, name }) {
  const { setFieldValue } = useFormikContext();
  const imagePicker = async (setFunc) => {
    try {
      const getImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!getImage.cancelled) {
        setFunc(getImage.uri);
      }
    } catch (error) {}
  };
  return (
    <TouchableHighlight
      onPress={() => imagePicker((value) => setFieldValue(name, value))}
      underlayColor={"#ededed"}
      style={[
        styles.container,
        {
          width: size ? size : 50,
          height: size ? size : 50,
          alignItems: "center",
          borderRadius: size ? size / 10 : 5,
          justifyContent: "center",
        },
        style,
      ]}
    >
      <>
        <MaterialCommunityIcons
          name={iconName}
          size={size ? size - 25 : 30}
          color={dark.primary}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  label: {
    color: dark.primary,
    fontWeight: "bold",
  },
});
