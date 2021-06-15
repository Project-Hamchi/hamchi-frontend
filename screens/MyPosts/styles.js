import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 14,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 24,
    paddingBottom: 5,
  },
  text: {
    alignSelf: 'center'
  },
  button: {
    width: 120,
    height: 45,
    alignSelf: 'flex-end',
    margin: 12,
    marginTop: 0,
    borderRadius: 8
  }
});

export default styles;
