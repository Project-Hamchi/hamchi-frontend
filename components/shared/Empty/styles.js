import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray'
  }
});

export default styles;
