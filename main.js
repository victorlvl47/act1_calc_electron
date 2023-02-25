const {app, BrowserWindow} = require('electron');

// Create window
function createWindow() {
    const ventana = new BrowserWindow({
        width: 640, 
        height: 360, 
        webPreferences: {
            nodeIntegration: true, 
            contextIsolation: false
        }
    });

    ventana.loadFile('index.html');
}

app.whenReady().then(createWindow);