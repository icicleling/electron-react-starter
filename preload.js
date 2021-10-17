const { contextBridge, ipcRenderer } = require("electron");

window.addEventListener("load", () => {
  contextBridge.exposeInMainWorld("electron", {
    closeApp: () => ipcRenderer.send("close-app"),
  });
});
