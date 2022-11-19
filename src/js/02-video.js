import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const load = () => {
  if (localStorage.getItem('videoplayer-current-time')) {
    return player.setCurrentTime(
      localStorage.getItem('videoplayer-current-time')
    );
  }
  return;
};
load();

const timeCode = data => {
  const timer = data.seconds;
  localStorage.setItem('videoplayer-current-time', timer);
  console.log(localStorage);
};
player.on('timeupdate', throttle(timeCode, 1000));
