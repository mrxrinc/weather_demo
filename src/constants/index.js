import React from 'react';
import {Dimensions, Platform} from 'react-native';

export const IOS = Platform.OS === 'ios' ? true : false;

export const {width, height} = Dimensions.get('window');

export const colors = {
  white: '#fff',
  dimmer: '#0000000a',

  // just for debugging purpose
  d: '#C8CA2633',
  f: '#ff00aa33',
};
