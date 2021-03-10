const bot = require("../../modules/bot");
const path = require("path");

const {
  HELP_MESSAGE,
  VALIDACAO_MESSAGE,
  COORDENADORIA_MESSAGE,
} = require("../../modules/messages");
const { FORMS_LINK } = require("../../modules/config");

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

//COMMAND /coordenadoria
bot.onText(/\/coordenadoria/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, COORDENADORIA_MESSAGE, {
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

//COMAND /formulario
bot.onText(/\/formulario/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `*Responda ao questionário de experiência do usuário* [clicando aqui](${FORMS_LINK}).\n*Desde já agradeço e espero que o bot seja útil para você! Estaremos sempre buscando incrementar novas funções ao projeto.*`,
    {
      parse_mode: "Markdown",
    }
  );
});
