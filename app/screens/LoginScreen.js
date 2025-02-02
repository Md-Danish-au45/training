import { StyleSheet, Image, Switch } from "react-native";
import React from "react";
import * as yup from "yup";
import Screen from "./Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/back.jpg")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Email"
          autoCapitalize="none"
          icon="email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        <Switch />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
