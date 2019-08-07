const electron = require('electron');

const { app } = electron;
const { BrowserWindow } = electron;

// import TitleBar from '~/electron/TitleBar/index';

// const path = require('path');
// const url = require('url');
// const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    backgroundColor: '#2e2c29',
    show: false,
    frame: true,
  });
  mainWindow.removeMenu();
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
