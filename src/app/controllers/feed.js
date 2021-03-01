const sanitizeHtml = require("sanitize-html");
const Parser = require("rss-parser");

const parser = new Parser();

const { FEED_URL } = require("../../modules/config");

const bot = require("../../modules/bot");
const News = require("../../app/models/news");

//ENVIAR FEED
//SALVAR FEED
async function saveFeed(title, link) {
  try {
    if (await isAlreadySaved(link)) {
      return console.log("Already parsed. ⚠");
    }

    const news = await new News({ title: title, link: link });
    await news.save().then(() => console.log("Item saved. ✅"));
  } catch (err) {
    return console.log(`Failed on saving News ❌\nERRO:${err}`);
  }
}

async function isAlreadySaved(link) {
  return (await News.findOne({ link })) ? true : false;
}

//LER FEED
async function parseFeed() {
  try {
    feed = await parser.parseURL(FEED_URL);
    feed.items.forEach((item) => {
      title = item.title.split(/\s{3,}/gi).shift();
      link = item.guid;
      saveFeed(title, link);
    });
  } catch (error) {
    console.clear();
    console.log(error);
  }
}

parseFeed();
