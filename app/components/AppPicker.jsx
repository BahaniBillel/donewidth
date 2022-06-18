import {
  StyleSheet,
  View,
  Button,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppTextInput from "./AppTextInput";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisible, setModalVisibe] = React.useState(false);

  const ShowModal = () => {
    setModalVisibe(true);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={ShowModal}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          
          <View style={styles.inputWrapper}>

          <AppTextInput style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppTextInput>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
          </View>
        </View>
      </TouchableWithoutFeedback>
      
      
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisibe(false)}></Button>

        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisibe(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 30,
    overflow: "hidden",
    alignItems:"center",
    justifyContent:"flex-start",
    flexWrap:"nowrap"
  },
  text: {
    flex:1,
  },
  textInput: {
    width: "100%",
    padding: 25,
  },
  icon: {
    marginRight: 1,
  },
  inputWrapper:{
    flex:1,
    flexDirection:"row",
    paddingHorizontal:20,
    flexWrap:"nowrap",
    justifyContent:"center",
    alignItems:"center"
  }
});
