import colors from '../../../theme/color';

const btnBgColor = type === 'filled' ? colors.main : colors.transparent;
const btnTextColor = type === 'filled' ? colors.white : colors.main;

export const buttonCommonStyle = {
  alignItems: "center",
  margin: 8,
  padding: 15,
  marginTop: 30,
  borderRadius: 30,
  backgroundColor: btnBgColor,
};
export const textCommonStyle = {
  fontSize: 15,
  fontWeight: 'bold',
  color: btnTextColor,
};
