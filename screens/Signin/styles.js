import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  title: {
    fontSize: 60,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    width: 300,
  },
  input: {
    margin: 8,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.outline,
  },
  keboardView: {
    flex: 1
  }
});

export default styles;
