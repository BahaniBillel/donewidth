import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText';

export default function PickerItem({label,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
        <AppText>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text:{
        padding:20
    }
})