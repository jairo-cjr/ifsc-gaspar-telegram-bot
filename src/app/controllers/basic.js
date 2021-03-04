const bot = require("../../modules/bot");
const path = require("path");

const { HELP_MESSAGE, VALIDACAO_MESSAGE } = require("../../modules/messages");

const SCHEDULE_LINK =
  "https://www.ifsc.edu.br/web/campus-gaspar/horarios-ensalamento";

//COMMAND /start
bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, HELP_MESSAGE, {
    parse_mode: "Markdown",
  });
});

//COMMAND /help
bot.onText(/\/help/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, HELP_MESSAGE, {
    parse_mode: "Markdown",
  });
});

//COMAND /horario
bot.onText(/\/horario/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Confira os horários da sua turma [clicando aqui](${SCHEDULE_LINK}).`,
    {
      parse_mode: "Markdown",
    }
  );
});

//COMAND /validar
bot.onText(/\/validar/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, VALIDACAO_MESSAGE, {
    parse_mode: "Markdown",
  });
});

//COMAND /documentos
bot.onText(/\/documentos/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Você pode acessar os documentos úteis do campus, como para matrículas, rematrículas, validação e outros serviços, [clicando aqui](https://www.ifsc.edu.br/web/campus-gaspar/secretaria-registro-academico).`,
    {
      parse_mode: "Markdown",
    }
  );
});
