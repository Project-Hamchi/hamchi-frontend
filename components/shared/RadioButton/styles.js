import { StyleSheet } from 'react-native';
import colors from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 9,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.outline
  },
  option: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.main
  },
  text: {
    color: colors.white
  },
  selectedOption: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.sub
  },
  selectedText: {
    color: colors.black
  }
});

export default styles;
