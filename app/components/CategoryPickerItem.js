import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";
const CategoryPickerItem = ({ label, onPress, item }) => {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
  },
});
