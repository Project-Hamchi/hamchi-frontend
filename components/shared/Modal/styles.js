import { StyleSheet } from 'react-native';
import colors from '../../../theme/color';

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
    padding: 20,

    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: colors.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    borderRadius: 14,
  },
  closeContainer: {
    alignItems: 'flex-start',
  },
  close: {
    alignSelf: 'flex-end',
  },
  confirm: {
    width: 80,
    marginTop: 0,
  },
  childrenContainer: {
    margin: 30,
    alignSelf: 'center'
  }
});

export default styles;
