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
  if (await !isAlreadySaved(link)) {
    var message = `<b>${title}</b>\n<a href="${link}">Clique aqui para ler sobre</a>`;
    bot.sendMessage(BOT_CHANNEL, message, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
    saveFeed(title, link);
  } else {
    // return console.error("Already parsed. ⚠");
  }
}

//SALVAR FEED
async function saveFeed(title, link) {
  try {
    const news = new News({ title: title, link: link });
    await news.save();
    // console.log("✅ Item saved.");
  } catch (err) {
    return console.log(`❌ Failed on saving News \nERRO:${err}`);
  }
}

//VERIFICAR SE ESTÁ SALVA NO BANCO
async function isAlreadySaved(link) {
  try {
    return (await News.findOne({ link })) ? true : false;
  } catch (err) {
    return console.log("ERRO ENCONTRADO AO BUSCAR NOTICIA: ", err);
  }
}

//LER FEED
async function parseFeed() {
  try {
    feed = await parser.parseURL(FEED_URL);
    feed.items.forEach((item) => {
      //regex para remover o excesso de espaços no titulo
      title = item.title.split(/\s{3,}/gi).shift();
      link = item.guid;
      sendFeed(title, link);
    });
  } catch (err) {
    console.log("ERRO AO ANALISAR FEED", err);
  }
}

setInterval(parseFeed, REFRESH_INTERVAL * 1000);
parseFeed();
