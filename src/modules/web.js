const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(
    `<h1>Acesse o canal clicando <a href="http://https://t.me/ifscgasparbot">aqui</a></h1>`
  );
});

var server = app.listen(PORT || 8080, "0.0.0.0", () => {
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
