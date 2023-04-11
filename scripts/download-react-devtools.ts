import { HttpsProxyAgent } from 'hpagent';
import download from 'download';
// import unzip from 'unzip-crx-3';
import path from 'node:path';

const httpsAgent = new HttpsProxyAgent({
  proxy: 'http://127.0.0.1:1081'
});
const outputDir = path.resolve(__dirname, '../.react-devtools');
// const getFileURL = chromeStoreID => `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${chromeStoreID}%26uc&prodversion=32`;
// const filename = 'react-devtool.crx';
// const filePath = path.join(outputDir, filename);

(async function () {
  // 从 chrome 应用商店下载crx并解压
  // await download(
  //   getFileURL('fmkadmapgofadopljbjfkapdkoienihi'),
  //   outputDir,
  //   {
  //     agent: httpsAgent,
  //     filename
  //   }
  // );
  // await unzip(filePath, outputDir);

  // 由于 electron 不支持最新的扩展格式，只能先用旧的
  // @see https://github.com/facebook/react/issues/25843#issuecomment-1406766561
  await download(
    'https://github.com/mondaychen/react/raw/017f120369d80a21c0e122106bd7ca1faa48b8ee/packages/react-devtools-extensions/ReactDevTools.zip',
    outputDir,
    {
      agent: httpsAgent,
      extract: true
    }
  );
})();
