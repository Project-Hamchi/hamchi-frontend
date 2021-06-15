import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  chatContainer: {
    flex: 9
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '10%',
    alignSelf: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.outline
  },
  textInput: {
    flex: 3
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 36,
    width: '5%'
  },
  leftMessage: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 15,
    margin: 10,
    backgroundColor: colors.sub
  },
  rightMessage: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderTopRightRadius: 0,
    padding: 15,
    margin: 10,
    backgroundColor: '#efefef'
  },
  leftTime: {
    alignSelf: 'flex-start'
  },
  rightTime: {
    alignSelf: 'flex-end'
  },
  input: {
    height: 36,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: colors.outline
  }
});

export default styles;
