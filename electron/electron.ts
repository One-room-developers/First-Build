import { app, BrowserWindow, dialog, screen, shell } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let mainWindow: BrowserWindow | null;

async function createWindow() {
  const screenSize = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    height: Math.round(screenSize.height * 0.9),
    width: Math.round(screenSize.width * 0.9),
    backgroundColor: '#2e2c29',
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false,
      preload: path.resolve(__dirname, './preload.js')
    }
  });

  mainWindow.loadURL(
    isDev ? "http://localhost:3000/select.html" :
    `file://${path.resolve(__dirname, '../dist/select.html')}`
  );

  mainWindow.once('ready-to-show', () => {
    mainWindow!.show();
  });
  mainWindow.on('closed', () => (mainWindow = null));

  mainWindow.webContents.on('new-window', (event, url) => {
    shell.openExternal(url);                     // 유저의 기본 브라우저로 애플리케이션 실행
    event.preventDefault();
  });
}

async function empty() {
  
}

app.on('ready', empty);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});