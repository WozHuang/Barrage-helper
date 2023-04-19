import { contextBridge, ipcRenderer } from 'electron';
import { IPC_CHANNEL } from '@shared/ipc';

const ipc = {
  stickMainWindow(stick: boolean) {
    ipcRenderer.send(IPC_CHANNEL.STICK_WINDOW, { stick });
  },
  closeMainWindow() {
    ipcRenderer.send(IPC_CHANNEL.CLOSE_WINDOW);
  }
};

contextBridge.exposeInMainWorld('ipc', ipc);

export type RenderIPC = typeof ipc;
