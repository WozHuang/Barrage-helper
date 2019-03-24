import axios from 'axios';
import mitt from 'mitt';
import { server } from 'root/config';

function HuyaSocket(doName, roomId) {
  const mitter = mitt();
  this.on = mitter.on;

  axios.get(`${server.host}/${doName}/${roomId}`)
    .then((res) => {
      const url = res.data;
      const socket = new WebSocket(url);
      let timer = null;
      socket.onopen = (event) => {
        mitter.emit('success', event);
        timer = setInterval(() => {
          socket.send('ping');
        }, 15000);
      };

      socket.onmessage = (event) => {
        const json = JSON.parse(event.data);
        if (json.statusCode === 200) {
          mitter.emit('message', json.data);
        } else {
          // 错误处理
          mitter.emit('errorMessage', json);
        }
      };

      socket.onerror = (err) => {
        mitter.emit('error', err);
      };

      socket.onclose = (e) => {
        clearInterval(timer);
        mitter.emit('close', e);
      };

      this.close = socket.close.bind(socket);
    })
    .catch((err) => {
      mitter.emit('fail', err);
    });
}

HuyaSocket.apiList = {
  getMessageNotice: '普通弹幕接口',
  getSendItemNotice: '礼物接口',
  getVipEnterBannerNotice: '高级用户进场信息接口',
};

HuyaSocket.BARRAGE_MSG = 'getMessageNotice';
HuyaSocket.GIFT_MSG = 'getSendItemNotice';
HuyaSocket.VIP_MSG = 'getVipEnterBannerNotice';

// 所有事件
// 普通弹幕接口、礼物接口、高级用户接口
HuyaSocket.eventList = {
  success: '连接成功',
  fail: '连接失败',
  message: '收到正常消息',
  errorMessage: '收到错误消息',
  error: '发生错误',
  close: '关闭事件',
};
export default HuyaSocket;
