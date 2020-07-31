import React from 'react';
import {View, Text} from 'react-native-animatable';
import customStyle from './style';

export default ({style, children}) => {
  return (
    <View style={customStyle.container} animation={'fadeIn'} useNativeDriver>
      <Text style={[customStyle.font, style]}>{children}</Text>
      <View style={customStyle.centigrade} />
    </View>
  );
};
