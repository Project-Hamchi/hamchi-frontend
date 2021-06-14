import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  left: {
    width: '50%',
    height: 130,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right: {
    width: '50%',
    height: 130,
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  listContainer: {
    height: '100%',
  }
});

export default styles;
