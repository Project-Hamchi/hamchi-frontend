import React from 'react';
import { View, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../Button';
import styles from './styles';

const AlertModal = ({ onConfirm, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={onConfirm}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.close}>
            <Pressable onPress={onClose}>
              <FontAwesome
                name="close"
                size={16}
                color={colors.black}
              />
            </Pressable>
          </View>
          <View style={styles.childrenContainer}>
            {children}
          </View>
          <Button
            text="확인"
            type="filled"
            onPress={onConfirm}
            customButtonStyle={styles.confirm}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
