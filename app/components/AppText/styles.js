import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 28, // Default font size
  },
});

export default styles;
