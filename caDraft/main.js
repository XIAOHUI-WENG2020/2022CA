const { app, BrowserWindow } = require('electron');
function createWindow() {
 const win = new BrowserWindow({
 width: 600,
 height: 500,
 webPreferences: {
 nodeIntegration: true
 },
 resizable: true
 });
 win.loadFile('mplayer.html');
}
app.on('ready', createWindow);
