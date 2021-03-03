const bot = require("../../modules/bot");
const SCHEDULE_LINK =
  "https://www.ifsc.edu.br/web/campus-gaspar/horarios-ensalamento";

bot.onText(/\/horario/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Confira os horários da sua turma [clicando aqui.](${SCHEDULE_LINK})`,
    {
      parse_mode: "Markdown",
    }
  );
});
