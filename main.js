// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 300,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    transparent: true,
    resizable: true,
  });
  mainWindow.webContents.setUserAgent('Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Mobile Safari/537.36');

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
  // mainWindow.show();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  // mainWindow.setIgnoreMouseEvents(true);

  globalShortcut.register('ctrl+f12', () => {
    mainWindow.webContents.openDevTools();
    mainWindow.setProgressBar(0.5);
    // Do stuff when Y and either Command/Control is pressed.
  });

  // mainWindow.setProgressBar(0.5)

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// app.commandLine.appendSwitch('remote-debugging-port', '8315');
// app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');
// 设置允许自动播放
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// require('./server');
