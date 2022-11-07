import { app, BrowserWindow, dialog, screen, shell } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let mainWindow: BrowserWindow | null;

async function createWindow() {
  const screenSize = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    height: Math.round(screenSize.height * 0.9),
    width: Math.round(screenSize.width * 0.9),
    show: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false,
      preload: path.resolve(__dirname, './preload.js')
    }
  });

  mainWindow.loadURL(
    isDev ? "http://localhost:3000" :
    `file://${path.resolve(__dirname, '../build/index.html')}`
  );

  mainWindow.once('ready-to-show', () => {
    mainWindow!.show();

    if(!app.isPackaged) {
      mainWindow!.webContents.openDevTools();
    }
  });
  mainWindow.on('closed', () => (mainWindow = null));

  mainWindow.webContents.on('will-navigate', (event, url) => {
    shell.openExternal(url);                     // 유저의 기본 브라우저로 애플리케이션 실행
    event.preventDefault();
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