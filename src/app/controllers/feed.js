const Parser = require("rss-parser");

const parser = new Parser();

const {
  FEED_URL,
  BOT_CHANNEL,
  REFRESH_INTERVAL,
} = require("../../modules/config");

const bot = require("../../modules/bot");
const News = require("../../app/models/news");

//ENVIAR FEED
async function sendFeed(title, link) {
  if (await isAlreadySaved(link)) {
    return console.error("Already parsed. ⚠");
  }
  var message = `<b>${title}</b>\n<a href="${link}">Clique aqui para ler sobre</a>`;
  bot.sendMessage(BOT_CHANNEL, message, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
  });
  saveFeed(title, link);
}

//SALVAR FEED
async function saveFeed(title, link) {
  try {
    const news = new News({ title: title, link: link });
    news.save().then(() => console.log("Item saved. ✅"));
  } catch (err) {
    return console.log(`Failed on saving News ❌\nERRO:${err}`);
  }
}

//VERIFICAR SE ESTÁ SALVA NO BANCO
async function isAlreadySaved(link) {
  return (await News.findOne({ link })) ? true : false;
}

//LER FEED
async function parseFeed(feedLink) {
  try {
    feed = await parser.parseURL(feedLink);
    feed.items.forEach((item) => {
      //regex para remover o excesso de espaços no titulo
      title = item.title.split(/\s{3,}/gi).shift();
      link = item.guid;
      sendFeed(title, link);
    });
  } catch (error) {
    console.clear();
    console.log(error);
  }
}

setInterval(parseFeed, REFRESH_INTERVAL * 10000);
parseFeed(FEED_URL);
