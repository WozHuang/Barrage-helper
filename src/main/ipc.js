import { ipcMain } from 'electron'; // eslint-disable-line
export default function ipc(mainWindow) {
// In main process.
//   ipcMain.on('asynchronous-message', (event, arg) => {
//     console.log(arg); // prints "ping"
//     event.sender.send('asynchronous-reply', 'pong');
//   });
//
//   ipcMain.on('synchronous-message', (event, arg) => {
//     console.log(arg); // prints "ping"
//     event.returnValue = 'pong';
//   });

  ipcMain.on('stick-mainWindow', (event, { stick }) => {
    mainWindow.setAlwaysOnTop(stick);
  });
  ipcMain.on('close-mainWindow', () => {
    mainWindow.close();
  });
}
