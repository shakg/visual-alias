const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('backend', {
  run: (commandToRun) => ipcRenderer.invoke('runCommand', commandToRun)
})