import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';

// Components
import AppTextInput from '../AppTextInput';
import ErrorMessage from '../forms/ErrorMessage';

const AppFormField = ({ name,width, ...otherProps }) => {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
