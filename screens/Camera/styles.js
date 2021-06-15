import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    width: '100%'
  },
  buttonContainer: {
    flexGrow: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  snap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: colors.main
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  taken: {
    width: 100,
    height: 180,
    backgroundColor: 'white'
  },
  stretch: {
    width: 120,
    height: 180,
    resizeMode: 'stretch',
  },
});

export default styles;
