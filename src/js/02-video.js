import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const load = () => {
  try {
    const seconds = localStorage.getItem('videoplayer-current-time') || 0;
    return player.setCurrentTime(seconds);
  } catch (error) {
    return error.name, error.message;
  }
};
load();

const timeCode = data => {
  const timer = data.seconds;
  return localStorage.setItem('videoplayer-current-time', timer);
};
player.on('timeupdate', throttle(timeCode, 1000));
