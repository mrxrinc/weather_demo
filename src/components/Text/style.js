import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

export default StyleSheet.create({
  container: {},
  font: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 100,
    color: 'white',
    lineHeight: 80,
  },
  centigrade: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: colors.white,
    borderWidth: 4,
    marginLeft: 5,
    position: 'absolute',
    top: 20,
    right: -28,
  },
});
