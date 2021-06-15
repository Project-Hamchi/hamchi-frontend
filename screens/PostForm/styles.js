import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    backgroundColor: colors.outline,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: colors.bold
  },
  stretch: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20
  },
  default: {
    width: '30%',
    height: '30%',
    alignSelf: 'center',
  }
});

export default styles;
