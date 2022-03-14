import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36
  },
  message: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
    marginBottom: 12
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16
  }
});