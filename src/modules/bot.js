const TelegramBot = require("node-telegram-bot-api");
const { BOT_TOKEN, NODE_ENV, HEROKU_URL } = require("./config");

if (NODE_ENV === "production") {
  bot = new TelegramBot(BOT_TOKEN);
  bot.setWebHook(HEROKU_URL + bot.token);
} else {
  bot = new TelegramBot(BOT_TOKEN, { polling: true });
}

console.log(`Bot server started in the ${NODE_ENV} mode`);

module.exports = bot;
