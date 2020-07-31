import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {IOS} from 'src/constants';

export const requestLocationPermission = async setLocation => {
  try {
    if (IOS) {
      Geolocation.requestAuthorization('whenInUse');
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setLocation(position);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Weather App Location Permission',
          message:
            'I need to know your Location ' +
            'to provide the current Weather data',
          buttonNegative: 'Cancel',
          buttonPositive: 'Sure!',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('We have ur Location');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};
