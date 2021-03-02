const express = require("express");
const bodyParser = require("body-parser");
const packageInfo = require("../../package.json");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(
    `Acesse o canal clicando <a href="http://https://t.me/ifscgasparbot">aqui</a>`
  );
});

var server = app.listen(PORT, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("🚀 Web server started at http://%s:%s", host, port);
});

module.exports = (bot) => {
  app.post("/" + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
