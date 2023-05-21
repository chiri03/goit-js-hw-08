import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
};

let throt_fun = throttle(onPlay, 1000);

player.on('timeupdate ', throt_fun);

let replayTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(replayTime)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
