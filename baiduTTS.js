let audio;
function voiceText(str) {
  const url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=${encodeURI(str)}`;
  if (!audio) audio = new Audio();
  audio.src = url;
  audio.autoplay = true;
}
// voiceText('nihao');

module.exports = voiceText;
