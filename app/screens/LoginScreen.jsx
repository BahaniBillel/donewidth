import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

// Components
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/doneLogo.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="password"
          textContentType="password"
          secureTextEntry
          name="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
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
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
