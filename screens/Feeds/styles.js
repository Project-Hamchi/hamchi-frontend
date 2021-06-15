import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    width: '75%',
    height: '26%',
    borderRadius: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonClose: {
    width: '20%',
    alignItems: 'center',
    backgroundColor: colors.outline,
    alignSelf: 'center',
    padding: 8,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    paddingBottom: 0
  },
  toggle: {
    marginLeft: 'auto'
  },
  filter: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  filterText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  hidden: {
    opacity: 0
  }
});

export default styles;
