import fs from 'fs';
import { app, session } from 'electron';
import path from 'node:path';

const devtoolsPath = path.resolve(__dirname, '../../.devtools');
export function loadDevtools() {
  if (fs.existsSync(devtoolsPath)) {
    const dirs = fs.readdirSync(devtoolsPath);
    app.whenReady().then(async () => {
      for (const dir of dirs) {
        await session.defaultSession.loadExtension(path.resolve(devtoolsPath, dir));
      }
    });
  }
}
