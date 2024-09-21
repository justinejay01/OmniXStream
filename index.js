const express = require("express");
const ytdl = require("@distube/ytdl-core");

const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Welcome to OmniXStream! Your Multi-Platform Video Streaming API!");
});

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname,"/views/index.html"));
  // ytdl.getInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ").then((info) => {
  //   res.send(info.formats);
  // });
});

app.get("/download", (req, res) => {
  ytdl.getInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ").then((info) => {
    res.send("<a href=''>");
  });
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
