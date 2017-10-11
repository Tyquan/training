const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

// create a new browser window
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: false,
        slashes: true
    }));

    mainWindow.on("close", () => {
        mainWindow = null;
    });
}

// when electron finishes initializes then create browser window
app.on("ready", createWindow);

// When all windows are closed close the program (not macOS)
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});

// Only for macOS
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

require("electron-debug")();