import {timeStatus} from 'src/utils/time';
export const lightBG = require('src/images/light.jpg');
export const blueBG = require('src/images/blue.jpg');
export const darkBG = require('src/images/dark.jpg');

export default (backgroundSwitcher = setBg => {
  const timer = timeStatus();
  console.log({timer});
  switch (timer) {
    case 'light':
      setBg(lightBG);
      break;
    case 'blue':
      setBg(blueBG);
      break;
    case 'dark':
      setBg(darkBG);
      break;
    default:
      setBg(lightBG);
  }
  return;
});
