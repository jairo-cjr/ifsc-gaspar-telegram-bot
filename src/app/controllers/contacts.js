const {
  FEED_URL,
  BOT_CHANNEL,
  REFRESH_INTERVAL,
} = require("../../modules/config");

const bot = require("../../modules/bot");
const Contact = require("../../app/models/contact");

bot.onText(/\/contato (.+)/, async (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content  of the message

  //   console.log(`MSG: ${JSON.stringify(msg, null, 2)}`);
  //   console.log(`MATCH: ${match[1]}`);

  const chatId = msg.chat.id;
  const name = match[1]; // the captured "whatever"
  const contact = await searchContact(name);
  sendContact(chatId, contact, name);

  // send back the matched "whatever" to the chat

  //bot.sendMessage(chatId, contact);
  /* bot.sendMessage(
    chatId,
    `*Aqui está o e-mail institucional de ${name}\nE-mail: <${email}>`,
    {
      parse_mode: "Markdown",
    }
  ); */
});

async function searchContact(name) {
  // name: { $regex: `^${name}`, $options: "i" },

  let regex = "/^[${name}]$/";
  try {
    const contact = await Contact.find({
      name: { $regex: `${name}`, $options: "i" },
    });
    // console.log(contact);
    return contact;
  } catch (err) {
    return console.log("ERRO ENCONTRADO AO BUSCAR CONTATO: ", err);
  }
}

function sendContact(chatId, contact, name) {
  if (contact.length == 0) {
    bot.sendMessage(
      chatId,
      `Nenhum contato com o nome *${name}* foi encontrado. Verifique se o nome foi informado corretamente e tente novamente.`,
      {
        parse_mode: "Markdown",
      }
    );
  } else if (contact.length > 1) {
    let message = `*Estes são os contatos encontrados:*\n\n`;
    contact.forEach((contact) => {
      message += `${contact.name}\n${contact.email}\n\n`;
    });
    bot.sendMessage(chatId, message, {
      parse_mode: "Markdown",
    });
    return;
  } else {
    let message = `Aqui está o e-mail institucional de *${contact[0].name}*\nE-mail: *${contact[0].email}*`;
    bot.sendMessage(chatId, message, {
      parse_mode: "Markdown",
    });
  }
}
