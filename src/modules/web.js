const express = require("express");
const http = require("http"); //importing http

// require("dotenv").config();
// const NODE_ENV = process.env.NODE_ENV;
const { NODE_ENV } = require("./config");

const app = express();

app.get("/", function (req, res) {
  res.send(
    `<h1>Acesse o canal clicando <a href="https://t.me/ifscgasparbot">aqui</a></h1>`
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

function startKeepAlive() {
  setInterval(() => {
    http
      .get("http://ifsc-gaspar-telegram-bot.herokuapp.com/", function (res) {
        res.on("data", function (chunk) {
          try {
            // optional logging... disable after it's working
            console.log("HEROKU OK");
          } catch (err) {
            console.log(err.message);
          }
        });
      })
      .on("error", function (err) {
        console.log("Error: " + err.message);
      });
  }, 15 * 60 * 1000); // load every 15 minutes
}

startKeepAlive();
