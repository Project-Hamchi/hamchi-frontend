import { StyleSheet } from 'react-native';
import colors from '../../../theme/color';

const styles = StyleSheet.create({
  toggleContainer: {
    position: "relative",
    alignItems: "center",
    width: 121,
    height: 36,
    backgroundColor: colors.outline,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  toggleWheel: {
    width: 50,
    height: 29,
    backgroundColor: 'white',
    borderRadius: 14,
  },
  options: {
    position: "absolute",
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  all: {
    paddingLeft: 6,
    width: 50,
    textAlign: "center",
  },
  tag: {
    paddingLeft: 1,
    width: 50,
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
  },
  black: {
    color: colors.black
  },
  main: {
    color: colors.main
  }
});

export default styles;
