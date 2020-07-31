import moment from 'moment';
const format = 'hh:mm:ss';

function timeFormatter([startTime, endTime]) {
  return [moment(startTime, format), moment(endTime, format)];
}
const ranges = {
  sunrise: timeFormatter(['05:00:00', '08:00:00']),
  day: timeFormatter(['08:00:00', '19:00:00']),
  sunset: timeFormatter(['19:00:00', '21:00:00']),
};
export const timeStatus = () => {
  let timeStatus = null;
  const now = moment();
  const currentTime = moment(`${now.hour()}:00:00`, format);

  switch (true) {
    case currentTime.isBetween(ranges.sunrise[0], ranges.sunrise[1]) ||
      currentTime.isBetween(ranges.sunset[0], ranges.sunset[1]):
      timeStatus = 'blue';
      break;
    case currentTime.isBetween(ranges.day[0], ranges.day[1]):
      timeStatus = 'light';
      break;
    default:
      timeStatus = 'dark';
  }
  return timeStatus;
};

// Use the time to determine the background:
// 5:00 - 8:00 use the blue background
// 8:00 - 19:00 use the light background
// 19:00 - 21:00 use the blue background
// 21:00 - 5:00 use the dark background
