# IFSC GASPAR BOT

O objetivo principal dessa aplicação, além de estudar a criação de bots e como funcionam, é criar um bot que, utilizando RSS, envie notícias publicadas no [portal do campus IFSC Gaspar](https://www.ifsc.edu.br/web/campus-gaspar/noticias-por-categoria?p_p_id=122_INSTANCE_xqrhJQNWyCSn&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=_118_INSTANCE_S8G9AYPoVKDg__column-2&p_p_col_count=2&p_r_p_564233524_resetCur=true&p_r_p_564233524_categoryId=27870). O bot poderá enviar o contato dos docentes quando solicitados pelo usuário, através do comando `/contato [nome do docente]`

## Tecnologias utilizadas

- Node.js
- [fivefilters](https://feedcontrol.fivefilters.org) - Criador e gerenciador de Feeds RSS
- [yagop/node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - framework para construir Bots do Telegram em Node
- [rss-parser](https://github.com/rbren/rss-parser) - A small library for turning RSS XML feeds into JavaScript objects.
- [sanitize-html](https://www.npmjs.com/package/sanitize-html) - Um limpador de HTML.

# Deployng on Heroku

```bash
git add .
git commit -am "Commit message"
git push heroku master
```

## Config

Create an `.env` document containing:

```json
NODE_ENV = development
BOT_TOKEN = Token fornecido pelo BotFather
BOT_CHANNEL = Canal que você criou e adicionou o bot, onde serão enviadas as atualizações.
RESET_WEBHOOK_URL = https://api.telegram.org/bot<TOKEN DO SEU BOT FORNECIDO PELO BOTFATHER>/setWebhook?url=
FEED_URL = RSS a ser utilizado pelo bot
REFRESH_INTERVAL = Intervalo de tempo em minutos que o Feed será analisado
HEROKU_URL = URL do seu App no Heroku
MONGO_URL = URL do seu banco de dados Mongo
```

## Thanks to

- [xorus](https://github.com/xorus/rss-to-telegram) - Por disponibilizar um projeto de RSS no Telegram, utilizado como base para o desenvolvimento deste.
