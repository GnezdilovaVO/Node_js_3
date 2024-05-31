const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "counter.json");

const count = JSON.parse(fs.readFileSync(filePath));

app.get("/", function (req, res) {
  count.main++;
  fs.writeFileSync(filePath, JSON.stringify(count, null, 2));
  res.send(
    `<h1>Main page</h1><a href='/about'>go about</a><p>Просмотров: ${count.main}</p>`
  );
});

app.get("/about", function (req, res) {
  count.about++;
  fs.writeFileSync(filePath, JSON.stringify(count, null, 2));
  res.send(
    `<h1>About page</h1><a href='/'>go main</a><p>Просмотров: ${count.about}</p>`
  );
});
app.listen(3030);
