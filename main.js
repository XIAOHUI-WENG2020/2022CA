const { app, BrowserWindow } = require('electron');
function createWindow() {
 const win = new BrowserWindow({
 width: 700,
 height: 600,
 webPreferences: {
 nodeIntegration: true
 },
 resizable: true
 });
 win.loadFile('index.html');
}
app.on('ready',createWindow);