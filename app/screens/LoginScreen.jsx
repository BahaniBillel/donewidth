import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup"
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";



const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

const LoginScreen = (props) => {
  

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/doneLogo.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit ,errors,setFieldTouched,touched}) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={()=>setFieldTouched("email")}
            />
           
            <ErrorMessage error={errors.email} visible={touched.email}/>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="password"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={()=>setFieldTouched("password")}
            />
           
           <ErrorMessage error={errors.password} visible={touched.password}/>
            <AppButton
        title="Validate"
        onPress={handleSubmit}
      />
          </>
        )}
      </Formik>

      
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
