import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 12,
    paddingBottom: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  submissionContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
    borderRadius: 14,
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'space-around'
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '10%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 56,
    marginLeft: 6,
  },
  messageContainer: {
    flex: 4,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontSize: 14
  },
  icon: {
    alignSelf: 'center'
  }
});

export default styles;
