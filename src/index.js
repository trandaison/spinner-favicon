import config from './config';

let intervalId = null;
let original = {
  href: null,
  type: 'image/png',
};

const favicon = () => {
  let icon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');

  if (!icon) {
    icon = document.createElement('link');
    icon.rel = 'icon';
    document.head.appendChild(icon);
  }

  return icon;
}

const changeFavicon = (link, type = 'image/png') => {
  const icon = favicon();
  icon.type = type;
  icon.href = link;
}

const SpinnerFavicon = {
  start() {
    if (intervalId) return;

    const icon = favicon();
    original = {
      href: icon.href,
      type: icon.type
    }

    const fps = config.images.length;
    const intervals = 1000 / fps;
    let i = 0;
    intervalId = setInterval(() => {
      changeFavicon(config.images[i % fps]);
      i++;
    }, intervals);

    return intervalId;
  },

  stop() {
    if (!intervalId) return;

    clearInterval(intervalId);
    intervalId = null;
    changeFavicon(original.href, original.type);
  }
};

export default SpinnerFavicon;
