import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import Screen from './Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 30,
    overflow: 'hidden',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    padding: 25,
  },
  icon: {
    marginRight: 10,
  },
});
