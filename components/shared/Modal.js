import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import Button from '../shared/Button';
import colors from '../../theme/color';

const alertModal = ({ title, onConfirm, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={onConfirm}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.closeContainer}>
            <Pressable onPress={onClose}>
              <Text style={styles.close}>X</Text>
            </Pressable>
          </View>
          <View style={styles.childrenContainer}>
            {children}
          </View>
          <Button
            text="확인"
            type="filled"
            onPress={onConfirm}
            customButtonStyle={{ margin: 0 }}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  confirm: {
    width: 60,
    height: 30,
    backgroundColor: colors.main
  },
  modalContainer: {
    margin: 20,
    padding: 32,

    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeContainer: {
    alignItems: 'flex-start',
  },
  close: {

  },
  childrenContainer: {
    margin: 20,
  }
});

export default alertModal;
