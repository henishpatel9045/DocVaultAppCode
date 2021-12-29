import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

export default function ImageShowComponent({ name }) {
  const { values, setFieldValue } = useFormikContext();
  if (values[name] == "") {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert("Remove Image", "Are you sure?", [
          { text: "Cancle" },
          {
            text: "Ok",
            onPress: () => setFieldValue(name, ""),
          },
        ])
      }
      style={styles.imageContainer}
    >
      <Image
        style={{ borderRadius: 5 }}
        source={{
          uri: values[name],
          width: "100%",
          height: 200,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "45%",
    height: 200,
  },
});
