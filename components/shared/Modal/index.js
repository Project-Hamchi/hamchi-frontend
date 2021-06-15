import React from 'react';
import {
  View,
  Modal,
  Pressable
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../Button';
import styles from './styles';

const AlertModal = (props) => {
  const {
    children,
    onConfirm,
    onClose,
  } = props;

  return (
    <Modal
      visible={true}
      transparent={true}
      animationType="slide"
      onRequestClose={onConfirm}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.close}>
            <Pressable onPress={onClose}>
              <FontAwesome
                size={16}
                name="close"
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
