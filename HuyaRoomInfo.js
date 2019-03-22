const axios = require('axios');

function parseRoomInfo(html) {
  // 解析html, 截取出所需要的js脚本里的内容
  // 使用eval运行
  const scriptText = new RegExp('<script\\sdata-fixed="true">([^<]*?全局js[\\s\\S]*?)</script>', 'g').exec(html)[1];
  // eslint-disable-next-line no-eval
  eval(scriptText);
  const valNameList = scriptText.match(/[_a-zA-Z0-9]+(?=\s?=)/g);
  const result = {};
  valNameList.forEach((key) => {
    // eslint-disable-next-line no-eval
    result[key] = eval(key);
  });
  return result;
}

function getRoomInfo(rId) {
  return new Promise((resolve, reject) => {
    axios.get(`https://m.huya.com/${rId}`)
      .then((res) => {
        resolve(parseRoomInfo(res.data));
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports.getRoomInfo = getRoomInfo;
