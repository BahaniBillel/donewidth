import {
  StyleSheet,
  View,
  Button,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

export default function AppPicker({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width="100%"
}) {
  const [modalVisible, setModalVisibe] = React.useState(false);

  const ShowModal = () => {
    setModalVisibe(true);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={ShowModal}>
        <View style={[styles.container,{width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}

          <View style={styles.inputWrapper}>
            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}

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
            <PickerItemComponent
            item={item}
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
    flexDirection: 'row',
    padding: 10,
    marginVertical: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
  },
  text: {
    flex: 1,
  },
  textInput: {
    width: '100%',
    padding: 25,
  },
  icon: {
    marginRight: 1,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});
