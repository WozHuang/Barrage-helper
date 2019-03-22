// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// 打开浏览器网页的方法
// shell.openExternal('https://www.baidu.com');
const { getRoomInfo } = require('./HuyaRoomInfo');

// const { shell } = require('electron');
const HuyaSocket = require('./HuyaSocket');
const voiceText = require('./baiduTTS');
const { parseMessage } = require('./HuyaEmoji');

const roomId = 11342412;


getRoomInfo(roomId)
  .then(console.log)
  .catch(console.error);

// 普通弹幕接口、礼物接口、高级用户接口
const api = ['getMessageNotice', 'getSendItemNotice', 'getVipEnterBannerNotice'][0];

const divList = [];

function getNewDiv() {
  let dom;
  if (divList.length >= 25) {
    dom = divList.shift();
  } else {
    dom = document.createElement('div');
  }
  divList.push(dom);
  return dom;
}


const huya = new HuyaSocket(api, roomId);
let container;
window.addEventListener('load', () => {
  container = document.getElementById('container');
});
huya.on('message', (data) => {
  const newMsg = getNewDiv();
  newMsg.classList.add('msg');
  newMsg.innerText = `${data.sendNick}:`;
  const content = parseMessage(data.content);
  const nodeList = content.map((item) => {
    let element;
    if (item.type === 'text') {
      element = document.createElement('text');
      element.innerText = item.content;
    } else if (item.type === 'emoji') {
      element = document.createElement('img');
      element.src = item.src;
    }
    return element;
  });
  nodeList.forEach((node) => {
    newMsg.appendChild(node);
  });
  voiceText(data.content);
  container.appendChild(newMsg);
  container.scrollTop = container.scrollHeight;
});
huya.on('error', (e) => {
  console.error('发生错误', e);
});

huya.on('close', (e) => {
  console.info('已关闭', e);
});

// setTimeout(() => {
//   huya.close();
// }, 5000);
