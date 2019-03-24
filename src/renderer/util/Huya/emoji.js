// 对应表情的字符串
const emojiList = [
  {
    key: 'dx',
    alt: '[大笑]',
  }, {
    key: 'sh',
    alt: '[送花]',
  }, {
    key: 'tx',
    alt: '[偷笑]',
  }, {
    key: 'dk',
    alt: '[大哭]',
  }, {
    key: 'hh',
    alt: '[嘿哈]',
  }, {
    key: '66',
    alt: '[666]',
  }, {
    key: 'gd',
    alt: '[感动]',
  }, {
    key: 'yw',
    alt: '[疑问]',
  }, {
    key: 'xh',
    alt: '[喜欢]',
  }, {
    key: 'jx',
    alt: '[奸笑]',
  }, {
    key: 'zan',
    alt: '[赞]',
  }, {
    key: 'ka',
    alt: '[可爱]',
  }, {
    key: 'am',
    alt: '[傲慢]',
  }, {
    key: 'kx',
    alt: '[开心]',
  }, {
    key: '88',
    alt: '[拜拜]',
  }, {
    key: 'hx',
    alt: '[害羞]',
  }, {
    key: 'zs',
    alt: '[衰]',
  }, {
    key: 'pu',
    alt: '[吐血]',
  }, {
    key: 'zc',
    alt: '[嘴馋]',
  }, {
    key: 'sq',
    alt: '[生气]',
  }, {
    key: 'fe',
    alt: '[扶额]',
  }, {
    key: 'bz',
    alt: '[闭嘴]',
  }, {
    key: 'kw',
    alt: '[枯萎]',
  }, {
    key: 'xu',
    alt: '[嘘]',
  }, {
    key: 'xk',
    alt: '[笑哭]',
  }, {
    key: 'lh',
    alt: '[流汗]',
  }, {
    key: 'bk',
    alt: '[不看]',
  }, {
    key: 'hq',
    alt: '[哈欠]',
  }, {
    key: 'tp',
    alt: '[调皮]',
  }, {
    key: 'gl',
    alt: '[鬼脸]',
  }, {
    key: 'cl',
    alt: '[戳脸]',
  }, {
    key: 'dg',
    alt: '[大哥]',
  }, {
    key: 'kun',
    alt: '[困]',
  }, {
    key: 'yb',
    alt: '[拥抱]',
  }, {
    key: 'zt',
    alt: '[猪头]',
  }, {
    key: 'kl',
    alt: '[骷髅]',
  }, {
    key: 'cc',
    alt: '[臭臭]',
  }, {
    key: 'xd',
    alt: '[心动]',
  }, {
    key: 'dao',
    alt: '[刀]',
  }];

const emojiKeys = emojiList.map(item => item.key);

const emojiMap = {};
emojiList.forEach((item) => { emojiMap[item.key] = item.alt; });

const emojiRegexp = new RegExp(`/{(${emojiKeys.join('|')})`, 'g');

// 不知道是对应什么的
// eslint-disable-next-line no-unused-vars
const unknownMap = [
  {
    key: 'wx',
    alt: '[微笑]',
  }, {
    key: 'll',
    alt: '[流泪]',
  }, {
    key: 'dy',
    alt: '[得意]',
  }, {
    key: 'jy',
    alt: '[惊讶]',
  }, {
    key: 'pz',
    alt: '[撇嘴]',
  }, {
    key: 'yun',
    alt: '[晕]',
  }, {
    key: 'ng',
    alt: '[难过]',
  }, {
    key: 'se',
    alt: '[色]',
  }, {
    key: 'cy',
    alt: '[抽烟]',
  }, {
    key: 'qd',
    alt: '[敲打]',
  }, {
    key: 'mg',
    alt: '[玫瑰]',
  }, {
    key: 'wen',
    alt: '[吻]',
  }, {
    key: 'xs',
    alt: '[心碎]',
  }, {
    key: 'zd',
    alt: '[炸弹]',
  }, {
    key: 'sj',
    alt: '[睡觉]',
  }, {
    key: 'hk',
    alt: '[很酷]',
  }, {
    key: 'by',
    alt: '[白眼]',
  }, {
    key: 'ot',
    alt: '[呕吐]',
  }, {
    key: 'fd',
    alt: '[奋斗]',
  }, {
    key: 'kz',
    alt: '[口罩]',
  }, {
    key: 'hp',
    alt: '[害怕]',
  }, {
    key: 'dai',
    alt: '[发呆]',
  }, {
    key: 'fn',
    alt: '[发怒]',
  }, {
    key: 'ruo',
    alt: '[弱]',
  }, {
    key: 'ws',
    alt: '[握手]',
  }, {
    key: 'sl',
    alt: '[胜利]',
  }, {
    key: 'lw',
    alt: '[礼物]',
  }, {
    key: 'sd',
    alt: '[闪电]',
  }, {
    key: 'gz',
    alt: '[鼓掌]',
  }, {
    key: 'qq',
    alt: '[亲亲]',
  }, {
    key: 'kb',
    alt: '[抠鼻]',
  }, {
    key: 'wq',
    alt: '[委屈]',
  }, {
    key: 'yx',
    alt: '[阴险]',
  }, {
    key: 'kel',
    alt: '[可怜]',
  }, {
    key: 'bs',
    alt: '[鄙视]',
  }, {
    key: 'zk',
    alt: '[抓狂]',
  }, {
    key: 'bq',
    alt: '[抱拳]',
  }, {
    key: 'ok',
    alt: '[OK]',
  }];

export default function parseMessage(msg) {
  const strList = msg.split(emojiRegexp);
  const result = [];
  strList.forEach((str, index) => {
    if (index % 2 === 0 && str) {
      // 避免返回空字符串
      result.push({
        type: 'text',
        content: str,
      });
    } else if (index % 2 === 1) {
      result.push({
        type: 'emoji',
        src: `https://a.msstatic.com/huya/main/emot_png/${str}.png`,
        alt: emojiMap[str],
      });
    }
  });
  return result;
}
