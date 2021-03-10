const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

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
  setInterval(function () {
    var options = {
      host: "your_app_name.herokuapp.com",
      port: 80,
      path: "/",
    };
    http
      .get(options, function (res) {
        res.on("data", (chunk) => {
          // try {
          //     console.log("HEROKU OK");
          // } catch (err) {
          //     console.log(err.message);
          // }
        });
      })
      .on("error", function (err) {
        console.log("Error: " + err.message);
      });
  }, 15 * 60 * 1000); // carrega a cada 20min
}

startKeepAlive();

module.exports = (bot) => {
  app.post("/" + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
