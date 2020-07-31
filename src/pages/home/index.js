import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
const PushNotification = require('react-native-push-notification');
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

  const fetchWeatherData = async (lat, long) => {
    const tempResp = await getCurrentTemprature(lat, long);
    console.log({tempResp});
    setTemprature(Math.floor(tempResp.data.main.temp));
    setIcon(tempResp.data.weather[0].main);
  };

  useEffect(() => {
    requestLocationPermission(setLocation);
  }, []);

  useEffect(() => {
    let weatherDataInterval;
    (() => {
      if (location) {
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        fetchWeatherData(lat, long);
        weatherDataInterval = setInterval(async () => {
          await fetchWeatherData(lat, long);
        }, 120 * 1000);
      }
    })();
    return () => {
      clearInterval(weatherDataInterval);
    };
  }, [location]);

  useEffect(() => {
    PushNotification.localNotificationSchedule({
      title: 'Weather Notification',
      message: `Current Temprature is ${temprature} °`,
      date: new Date(Date.now() + 10 * 1000),
      repeatType: 'minute',
    });
    return () => {
      PushNotification.cancelAllLocalNotifications();
    };
  }, [temprature]);

  return (
    <View style={style.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Backgrounds />
      <View style={style.contentWrapper}>
        <IconsContainer status={icon} />
        <Text style={style.tempratureText}>{temprature}</Text>
      </View>
      {/* <TouchableOpacity onPress={() => pusher()}>
        <Text>PUSH</Text>
      </TouchableOpacity> */}
    </View>
  );
};
