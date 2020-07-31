import {timeStatus} from 'src/utils/time';
import {lightBG, blueBG, darkBG} from 'src/constants';

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
