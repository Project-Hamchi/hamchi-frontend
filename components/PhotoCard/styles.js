import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.outline,
  },
  tape: {
    width: '40%',
    height: 20,
    top: 12,
    zIndex: 1,
  },
  stretch: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default styles;
