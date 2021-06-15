import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    alignItems: 'flex-start',
    height: '8%',
    padding: '3%',
    backgroundColor: colors.white
  },
  photo: {
    alignSelf: 'center',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  divider: {
    marginBottom: 10,
    height: 1,
    width: '90%',
    backgroundColor: colors.outline
  },
  textContainer: {
    padding: 12,
    alignItems: 'center'
  },
  date: {
    fontSize: 13,
    textAlign: "center",
    margin: 8,
    color: 'gray',
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  key: {
    fontSize: 16,
    alignSelf: 'flex-start',
    margin: 3,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 3,
  },
  details: {
    justifyContent: 'center',
    marginTop: 10,
    width: '70%',
  },
  descriptionContainer: {
    padding: 5,
    paddingBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.outline
  },
  description: {
    alignSelf: 'center'
  }
});

export default styles;
