import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    height: 70,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.white,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 14,
  },
  leftContainer: {
    flex: 5,
    justifyContent: 'space-around'
  },
  rightContainer: {
    flex: 1,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontSize: 14,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey'
  }
});

export default styles;
