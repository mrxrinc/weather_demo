import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import backgroundSwitcher from './utils';

import style from './style';

export default () => {
  const [bg, setBg] = useState(null);

  useEffect(() => {
    backgroundSwitcher(setBg); // to load at first
    let interval = setInterval(() => {
      backgroundSwitcher(setBg);
    }, 60 * 1000);
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={style.backgroundImages}>
      <Image
        source={bg}
        style={style.images}
        animation={'fadeIn'}
        useNativeDriver
      />
      {/* a tiny amount of dimming in case text get on the white parts of BG
        image on some devices! */}
      <View style={style.dimmer} />
    </View>
  );
};
