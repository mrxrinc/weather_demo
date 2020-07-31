import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 0.5,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  tempratureText: {
    color: colors.white,
    fontSize: 80,
    marginTop: 20,
  },
});
