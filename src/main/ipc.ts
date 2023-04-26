import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import { IPC_CHANNEL, STICK_WINDOW_OPTIONS } from '@shared/ipc';

function getWindowFromEvent(event: IpcMainEvent): BrowserWindow {
  return BrowserWindow.fromWebContents(event.sender);
}
function ipc() {
  ipcMain
    .on(IPC_CHANNEL.STICK_WINDOW, (event, { stick }: STICK_WINDOW_OPTIONS) => {
      getWindowFromEvent(event).setAlwaysOnTop(stick);
    })
    .on(IPC_CHANNEL.CLOSE_WINDOW, (event) => {
      const win = getWindowFromEvent(event);
      win.close();
    });
}

ipc();
