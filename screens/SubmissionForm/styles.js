import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.outline,
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  stretch: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    color: colors.bold
  },
});

export default styles;
