require("dotenv").config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  BOT_CHANNEL: process.env.BOT_CHANNEL,
  FEED_URL: process.env.FEED_URL,
  BOT_DOMAIN: process.env.BOT_DOMAIN,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_URL: process.env.MONGO_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
