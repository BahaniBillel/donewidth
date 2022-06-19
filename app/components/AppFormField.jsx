import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';

// Components
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
