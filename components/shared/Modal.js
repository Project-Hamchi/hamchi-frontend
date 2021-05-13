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
        <Pressable onPress={onClose}><Text>X</Text></Pressable>
        <View style={styles.modalContainer}>
          {children}
        </View>
        <Button
          text="확인"
          type="filled"
          onPress={onConfirm}
        ></Button>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  confirm: {
    width: 60,
    height: 30,
    backgroundColor: colors.main
  },
  modalContainer: {
    margin: 20,
    padding: 35,

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
  }
});

export default alertModal;
