import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    alignSelf: 'flex-start',
    marginTop: 10,
    padding: 20,
    height: 20,
  },
  username: {
    alignSelf: 'flex-start',
    padding: 20,
    paddingTop: 6,
    height: 20,
  },
  divider: {
    alignSelf: 'center',
    width: '80%',
    height: 1,
    backgroundColor: colors.outline
  }
});

export default styles;
