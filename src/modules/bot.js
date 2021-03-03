const TelegramBot = require("node-telegram-bot-api");
const { BOT_TOKEN, NODE_ENV, BOT_DOMAIN } = require("./config");

if (NODE_ENV === "production") {
  bot = new TelegramBot(BOT_TOKEN);
  bot.setWebHook(BOT_DOMAIN + bot.token);
} else {
  bot = new TelegramBot(BOT_TOKEN, { polling: true });
}

console.log(`🤖 Bot server started in the ${NODE_ENV} mode`);

module.exports = bot;
