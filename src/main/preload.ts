import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App info
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getPlatform: () => ipcRenderer.invoke('get-platform'),
  
  // Language
  setLanguage: (lang: string) => ipcRenderer.send('set-language', lang),
  
  // Menu events
  onMenuNew: (callback: () => void) => {
    ipcRenderer.on('menu-new', callback)
    return () => ipcRenderer.removeListener('menu-new', callback)
  },
  onMenuOpen: (callback: () => void) => {
    ipcRenderer.on('menu-open', callback)
    return () => ipcRenderer.removeListener('menu-open', callback)
  },
  onMenuSave: (callback: () => void) => {
    ipcRenderer.on('menu-save', callback)
    return () => ipcRenderer.removeListener('menu-save', callback)
  },
  onMenuAbout: (callback: () => void) => {
    ipcRenderer.on('menu-about', callback)
    return () => ipcRenderer.removeListener('menu-about', callback)
  }
})

// Type definitions for the exposed API
declare global {
  interface Window {
    electronAPI: {
      getAppVersion: () => Promise<string>
      getPlatform: () => Promise<string>
      setLanguage: (lang: string) => void
      onMenuNew: (callback: () => void) => () => void
      onMenuOpen: (callback: () => void) => () => void
      onMenuSave: (callback: () => void) => () => void
      onMenuAbout: (callback: () => void) => () => void
    }
  }
}
