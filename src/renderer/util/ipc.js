import { ipcRenderer } from 'electron';
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
//
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg); // prints "pong"
// });
// ipcRenderer.send('asynchronous-message', 'ping');

function stickMainWindow(stick) {
  ipcRenderer.send('stick-mainWindow', { stick });
}

function closeMainWindow() {
  ipcRenderer.send('close-mainWindow');
}

export { stickMainWindow, closeMainWindow };
