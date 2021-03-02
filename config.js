module.exports = {
  server: {
    // 这是本地启动的签名服务的端口
    port: 3000,
    // 这是electron调用的签名服务的地址
    host: 'http://106.53.82.122:3000',
  },
  huya: {
    // 在此填写虎牙得到的id，用于签名鉴权
    openId: process.env.openid,
    secretId: process.env.secretid,
  },
};
