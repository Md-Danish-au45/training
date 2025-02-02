import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText/AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return (
    <View>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
