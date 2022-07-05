const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function onReady() {
  win = new BrowserWindow({ width: 900, height: 900 });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "dist/be-the-ball/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}

app.on("ready", onReady);
