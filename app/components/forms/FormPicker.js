import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import Picker from "../Picker";

const AppformPicker = ({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      >
        <ErrorMessage error={errors.name} visible={touched[name]} />
      </Picker>
    </>
  );
};

export default AppformPicker;

const styles = StyleSheet.create({});
