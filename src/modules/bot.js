/* FIRST VERSION
const TelegramBot = require("node-telegram-bot-api");
const { BOT_TOKEN, NODE_ENV, BOT_DOMAIN } = require("./config");

if (NODE_ENV === "production") {
  bot = new TelegramBot(BOT_TOKEN);
  bot.setWebHook(BOT_DOMAIN + bot.token);
} else {
  bot = new TelegramBot(BOT_TOKEN, { polling: true });
}

console.log(`Bot server started in the ${NODE_ENV} mode`); 

module.exports = bot;
*/

const { BOT_TOKEN, BOT_DOMAIN } = require("./config");
/* DEVELOPMENT MODE
const Telegraf = require("Telegraf");
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));

bot.launch();
*/

/* PRODUCTION */
const { Composer } = require("micro-bot");

bot.start((ctx) => ctx.reply("Welcome"));
const bot = new Composer();

module.exports = bot;
