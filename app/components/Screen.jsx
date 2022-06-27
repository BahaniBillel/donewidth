import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view,style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    
  },
  view:{
    
  }
});

export default Screen;
