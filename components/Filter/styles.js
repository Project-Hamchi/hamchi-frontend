import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.white,
    marginBottom: 0
  },
  tagContainer: {
    flexDirection: "row",
  },
  tag: {
    marginTop: 12,
    width: 50,
    height: 24,
    margin: 5,
    marginBottom: -20,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 6,
  },
  text: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  whiteText: {
    color: colors.white
  },
  mainText: {
    color: colors.main
  },
  whiteBackground: {
    backgroundColor: colors.white
  },
  mainBackground: {
    backgroundColor: colors.main
  }
});

export default styles;
