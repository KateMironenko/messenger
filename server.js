// server.js
const express = require("express");
const path = require("path");

const app = express();
let port = 3000;

if (process.env.PORT) {
  port = process.env.PORT;
}
app.use(express.static(path.join(__dirname + "/dist")));

app.use("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {});
