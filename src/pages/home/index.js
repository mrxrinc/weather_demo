import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {requestLocationPermission} from 'src/utils/location';
import {getCurrentTemprature} from 'src/utils/api';
import Backgrounds from 'src/components/backgrounds';
import IconsContainer from 'src/components/iconsContainer';
import Text from 'src/components/Text';
import style from './style';

export default () => {
  const [temprature, setTemprature] = useState('--');
  const [location, setLocation] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    requestLocationPermission(setLocation);
  }, []);

  useEffect(() => {
    (async () => {
      if (location) {
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        const tempResp = await getCurrentTemprature(lat, long);
        setTemprature(Math.floor(tempResp.data.main.temp));
        setIcon(tempResp.data.weather[0].main);
      }
    })();
  }, [location]);

  return (
    <View style={style.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Backgrounds />
      <View style={style.contentWrapper}>
        <IconsContainer status={icon} />
        <Text style={style.tempratureText}>{temprature}</Text>
      </View>
    </View>
  );
};
