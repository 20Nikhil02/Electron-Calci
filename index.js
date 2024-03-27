const { app, Notification,BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
/*const {autoupdater } = require('electron-updater');
const log = require('electron-log');

log.transports.file.resolvePathFn = () => path.join('C:\\Users\\F337751\\Documents\\Projects\\Tool_Man\\Tool Management', 'logs\\main.log');

log.info('Log from the main process');
log.warn('Log for ERROR');

*/
function notification(){
    new Notification({title:"New Notification",body:"Nothing New..."});
}
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'My Calci App',
        height: 620,
        width: 500

    });
    //mainWindow.loadFile('index.html')
    /*
    const startUrl = url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file',
    });*/

    mainWindow.loadFile('./index.html');
}


app.whenReady().then(() => {
    createMainWindow();
    notification();
});
   /* autoupdater.checkForUpdatesAndNotify();

   
});

autoupdater.on('update-avilable',()=>{
    log.info('update-avilable');
})

autoupdater.on('checking-for-update',()=>{
    log.info('checking-for-update');
})

autoupdater.on('download-progress',()=>{
    log.info('download-progress');
})

app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit();
    }*
})*/