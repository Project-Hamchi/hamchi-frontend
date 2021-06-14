import { StyleSheet } from 'react-native';
import colors from '../../../theme/color';

const styles = StyleSheet.create({
  postContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 170,
    paddingTop: 12,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1
  },
  checkbox: {
    width: 10,
    height: 10,
    alignSelf: 'center'
  },
  image: {
    width: '28%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 60,
    marginLeft: 6
  },
  environment: {
    height: undefined,
    aspectRatio: 1,
    margin: 3,
    borderRadius: 10,
    flex: 4
  },
  textContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    padding: 10
  },
  text: {
    fontSize: 16
  },
  submissionContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '93%',
    alignSelf: 'center',
    marginBottom: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.outline,
    borderRadius: 14
  },
  username: {
    alignSelf: 'center',
    marginBottom: 8
  },
  icon: {
    position: 'absolute',
    right: 0,
    margin: 10
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    flexDirection: 'column'
  }
});

export default styles;
