import React from 'react';
import {View} from 'react-native-animatable';
import {colors} from 'src/constants';
import CloudIcon from 'src/components/icons/cloud.svg';
import SunIcon from 'src/components/icons/sun.svg';
import RainIcon from 'src/components/icons/rain.svg';

export default ({status}) => {
  // if the condition is not one of three ones we dealed on!
  if (status !== 'Rainy' && status !== 'Clouds' && status !== 'Clear') {
    return (
      <View animation={'fadeIn'} useNativeDriver>
        <CloudIcon width={90} height={90} fill={colors.white} />
      </View>
    );
  }

  return (
    <View animation={'fadeIn'} delay={3000} useNativeDriver>
      {status === 'Rainy' && (
        <RainIcon width={90} height={90} fill={colors.white} />
      )}
      {status === 'Clouds' && (
        <CloudIcon width={90} height={90} fill={colors.white} />
      )}
      {status === 'Clear' && (
        <SunIcon width={90} height={90} fill={colors.white} />
      )}
    </View>
  );
};
