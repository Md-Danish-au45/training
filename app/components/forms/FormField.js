import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <View>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        onChangeText={handleChange(name)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
