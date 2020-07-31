import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

export default StyleSheet.create({
  backgroundImages: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  images: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dimmer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.dimmer,
  },
});
