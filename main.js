const path = require("path");

// inorder to load our web page we need these two electron modules
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // using the browserWindow to create a new window
  const win = new BrowserWindow({
    backgroundColor: "#ccc",
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // loading your desired file
  win.loadFile("index.html");
}
// in electron, the browser window will be created only after the app is in ready state
app.whenReady().then(() => {
  createWindow();
});

// close the windows
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
