const crypto = require('crypto');
const config = require('../config');

const key = config.huya.secretId;
function getSign(data = '', timestamp) {
  const dataStr = JSON.stringify(data);
  const now = timestamp || Math.round(Date.now() / 1000);
  const str = `data=${dataStr}&key=${key}&timestamp=${now}`;
  return crypto.createHash('md5').update(str, 'utf-8').digest('hex');
}

module.exports = { getSign };
