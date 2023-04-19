import { HttpsProxyAgent } from 'hpagent';
import download from 'download';
import unzip from 'unzip-crx-3';
import path from 'node:path';

const httpsAgent = new HttpsProxyAgent({
  proxy: 'http://127.0.0.1:1081'
});
const getOutputDir = (filename: string) => path.resolve(__dirname, '../.devtools', filename);
const getFileURL = (chromeStoreID: string) =>
  `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${chromeStoreID}%26uc&prodversion=32`;

(async function () {
  const extensions = [
    // {id: 'fmkadmapgofadopljbjfkapdkoienihi', name: 'react-devtool'},
    { id: 'lmhkpmbekcpmknklioeibfkpmmfibljd', name: 'redux-devtool' }
  ];
  await Promise.all(
    extensions.map(async ({ id, name }) => {
      // 从 chrome 应用商店下载crx并解压
      const outputDir = getOutputDir(name);
      const filename = name + '.crx';
      await download(getFileURL(id), outputDir, { agent: httpsAgent, filename });
      await unzip(path.join(outputDir, filename), outputDir);
    })
  );

  // 由于 electron 不支持最新的扩展格式，只能先用旧的
  // @see https://github.com/facebook/react/issues/25843#issuecomment-1406766561
  await download(
    'https://github.com/mondaychen/react/raw/017f120369d80a21c0e122106bd7ca1faa48b8ee/packages/react-devtools-extensions/ReactDevTools.zip',
    getOutputDir('react-devtool'),
    { agent: httpsAgent, extract: true }
  );
})();
