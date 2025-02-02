import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import defaultStyle from "../components/AppText/styles";
import styles from "../config/styles";
const Test = ({ name, age }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});
export default Test;
