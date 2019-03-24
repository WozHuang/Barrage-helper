let audio;
let ended = true;
let list = [];
let timer = null;

function read(str) {
  ended = false;
  const url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=${encodeURI(str)}`;
  if (!audio) {
    audio = new Audio();
    audio.autoplay = true;
    audio.addEventListener('ended', onEnded);
  }
  audio.src = url;
  timeout();
}

function onEnded() {
  ended = true;
  if (timer) {
    clearTimeout(timer);
  }
  if (list.length !== 0) {
    read(list.shift());
  }
}

function timeout() {
  timer = setTimeout(() => {
    timer = null;
    onEnded();
  }, 1000);
}

export default function addToList(str) {
  if (!ended) {
    if (list.length > 10) list.shift();
    list.push(str);
  } else {
    list = [];
    read(str);
  }
}
