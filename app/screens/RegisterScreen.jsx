import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

// Components
import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

const RegisterScreen = () => {
  return (
    <Screen>
      <Form
        initialValues={{
          name: "",
          Email: "",
          Password: "",
        }}
      >
        <FormField 
        name="name" 
        icon="account" 
        placeholder="Name" 
        maxLength={50} />
        <FormField 
        autoCapitalize="none"
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        name="email"
        
        />
        <FormField
        
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="password"
        textContentType="Password"
        secureTextEntry
        name="password"
        />
        <SubmitButton title="Register"/>
      </Form>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
