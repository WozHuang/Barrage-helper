import fs from 'fs';
import { app, session } from 'electron';

export function loadDevtools(devtoolsPath: string) {
  if (fs.existsSync(devtoolsPath)) {
    app.whenReady().then(async () => {
      await session.defaultSession.loadExtension(devtoolsPath,);
    });
  }
}
