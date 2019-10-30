// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow, shell, ipcMain } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function onClosed() {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 880,
    minHeight: 680,
    width: 880,
    height: 680,
    backgroundColor: '#696c73',
    webPreferences: {
      nodeIntegration: false,
      preload: `${__dirname}/preload.js`,
    },
    show: false,
    icon: `file://${__dirname}/icon.ico`,
  });
  mainWindow.removeMenu();
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // mainWindow.webContents.openDevTools();
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    ipcMain.on('open-external-window', (event, arg) => {
      shell.openExternal(arg);
    });
  });
  mainWindow.on('closed', onClosed);

  return mainWindow;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  createWindow();
});

ipcMain.on('load-page', (event, arg) => {
  mainWindow.loadURL(arg);
});
