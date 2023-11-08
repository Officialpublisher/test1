const { app, BrowserWindow } = require('electron');
const Main = require('electron/main');
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1300,
    height: 900,
    autoHideMenuBar: true,
    icon: `${__dirname}/src/assets/StoreLogo.png`

})

  
  win.loadFile(path.join(__dirname,'/public/index.html'));
  
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})