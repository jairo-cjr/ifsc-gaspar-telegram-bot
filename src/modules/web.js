const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const CronJob = require("cron").CronJob;

const { NODE_ENV } = require("./config");

const app = express();
app.use(bodyParser.json());

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

function startKeepAlive() {
  http
    .get("http://ifsc-gaspar-telegram-bot.herokuapp.com/", function (res) {
      res.on("data", (chunk) => {
        // try {
        //   const d = new Date();
        //   console.log("HEROKU OK:", d);
        // } catch (err) {
        //   console.log(err.message);
        // }
      });
    })
    .on("error", function (err) {
      console.log("Error: " + err.message);
    });
}

//faz uma req. para o Heroku a cada 30s, tentando evitar que entre no modo inativo
const keepAliveJob = new CronJob("*/30 * * * * *", () => {
  startKeepAlive();
});
startKeepAlive();
keepAliveJob.start();

module.exports = (bot) => {
  app.post("/" + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
