// 用于获取签名后url的服务
import crypto from 'node:crypto';
import process from 'node:process';
import Koa from 'koa';
import koaRouter from 'koa-router';
import logger from 'koa-logger';
import dotenv from 'dotenv';

dotenv.config();

const HUYA_SECRET_ID = process.env.HUYA_SECRET_ID;
const HUYA_OPENID = process.env.HUYA_OPENID;
const PORT = process.env.PORT || 3000;

function getSign(data: string, timestamp) {
  const query = `data=${data}&key=${HUYA_SECRET_ID}&timestamp=${timestamp}`;
  return crypto.createHash('md5').update(query, 'utf-8').digest('hex');
}

const router = koaRouter()
  .get('/:doName/:roomId', async (ctx, next) => {
    const now = Math.round(Date.now() / 1000);
    const { doName, roomId } = ctx.params;
    if (!['getMessageNotice', 'getSendItemNotice', 'getVipEnterBannerNotice'].includes(doName)) {
      throw new Error(
        `doName应是${['getMessageNotice', 'getSendItemNotice', 'getVipEnterBannerNotice'].join()}中的一个`
      );
    }
    const data = JSON.stringify({ roomId: parseInt(roomId, 10) });
    ctx.response.body = `wss://openapi.huya.com/index.html?do=${doName}&data=${data}&appId=${HUYA_OPENID}&timestamp=${now}&sign=${getSign(
      data,
      now
    )}`;
    await next();
  })
  .get('/', async (ctx) => {
    ctx.response.body = '请求 /:doName/:roomId 获得对应的url';
  });

const app = new Koa()
  .use(logger())
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      ctx.response.body = { error: e.message };
      ctx.response.status = 500;
    }
    // ctx.set('Access-Control-Allow-Origin', '*');
  })
  .use(router.routes());
app.listen(PORT);

console.log(`[${new Date().toLocaleString()}]   App is listening at port ${PORT}...`);
