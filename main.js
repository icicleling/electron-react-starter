const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 800 });
  win.loadFile(path.join(__dirname, "./build/index.html"));

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "./build/index.html"));
    return;
  }

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
