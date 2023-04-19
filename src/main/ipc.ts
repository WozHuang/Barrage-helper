import { BrowserWindow, ipcMain } from 'electron';
import { IPC_CHANNEL, STICK_WINDOW_OPTIONS } from '@shared/ipc'; // eslint-disable-line
function ipc() {
  ipcMain
    .on(IPC_CHANNEL.STICK_WINDOW, (event, { stick }: STICK_WINDOW_OPTIONS) => {
      BrowserWindow.fromWebContents(event.sender).setAlwaysOnTop(stick);
    })
    .on(IPC_CHANNEL.CLOSE_WINDOW, (event) => {
      BrowserWindow.fromWebContents(event.sender).close();
    });
}

ipc();
