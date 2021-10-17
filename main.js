const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: { preload: path.join(__dirname, "./preload.js") },
  });
  win.loadFile(path.join(__dirname, "./build/index.html"));

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "./build/index.html"));
    return;
  }

  win.loadURL("http://localhost:3000");

  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on("close-app", () => {
    app.quit();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
