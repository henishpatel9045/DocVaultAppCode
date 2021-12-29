import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function AppForm({
  values,
  validationSchema,
  onSubmit,
  children,
  style,
  ...otherProps
}) {
  return (
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <View style={style}>{children}</View>}
    </Formik>
  );
}

const styles = StyleSheet.create({});
