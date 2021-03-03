const express = require("express");
const bodyParser = require("body-parser");

// require("dotenv").config();
// const NODE_ENV = process.env.NODE_ENV;
const { NODE_ENV } = require("./config");

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(
    `<h1>Acesse o canal clicando <a href="http://https://t.me/ifscgasparbot">aqui</a></h1>`
  );
});

if (NODE_ENV === "production") {
  var server = app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("🚀 Web server started at http://%s:%s", host, port);
  });
} else {
  const PORT = 3000;
  var server = app.listen(PORT || 8080, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("🚀 Web server started at http://%s:%s", host, port);
  });
}

module.exports = (bot) => {
  app.post("/" + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
