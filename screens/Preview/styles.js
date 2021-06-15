import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  buttonContainer: {
    flexGrow: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  snap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: colors.main
  },
  stretch: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default styles;
