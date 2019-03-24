// 用于获取签名后url的服务

const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const config = require('../config');
const { getSign } = require('./sign');

const app = new Koa();
const appId = config.huya.openId;

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  try {
    await next();
  } catch (e) {
    ctx.response.body = { error: e.message };
    ctx.response.status = 500;
  }
  ctx.set('Access-Control-Allow-Origin', '*');
});

router.get('/:doName/:roomId', async (ctx, next) => {
  const now = Math.round(Date.now() / 1000);
  const { doName, roomId } = ctx.params;
  if (['getMessageNotice', 'getSendItemNotice', 'getVipEnterBannerNotice'].indexOf(doName) === -1) {
    throw new Error(`doName应是${['getMessageNotice', 'getSendItemNotice', 'getVipEnterBannerNotice'].join()}中的一个`);
  }
  const data = { roomId: parseInt(roomId, 10) };
  ctx.response.body = `wss://openapi.huya.com/index.html?do=${doName}&data=${JSON.stringify(data)}&appId=${appId}&timestamp=${now}&sign=${getSign(data, now)}`;
  await next();
});

router.get('/', async (ctx) => {
  ctx.response.body = '请求 /:doName/:roomId 获得对应的url';
});

app.use(bodyParser());
app.use(router.routes());
app.listen(config.server.port);
console.log(`App is listening at port ${config.server.port}...`);
