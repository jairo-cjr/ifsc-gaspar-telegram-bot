# IFSC GASPAR BOT

O objetivo principal dessa aplicação, além de estudar a criação de bots e como funcionam, é criar um bot baseado em regras que responda a comandos pré-definidos executados pelo usuário.

## Tecnologias utilizadas

- Node.js
- [Express](https://expressjs.com/pt-br/) - Framework NodeJS;
- [yagop/node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - framework para construir Bots do Telegram em Node;
- MongoDB - Banco de dados escolhido para gerenciar os dados da aplicação.
- Heroku - Para hospedar o projeto.

# Deployng on Heroku

```bash
git add .
git commit -am "Make it better"
git push heroku master
```

## Config

Create an `.env` document containing:

```json
NODE_ENV = development | production
BOT_TOKEN = Token fornecido pelo BotFather
BOT_CHANNEL = Canal que você criou e adicionou o bot, onde serão enviadas as atualizações.
BOT_DOMAIN = URL do seu App no Heroku
RESET_WEBHOOK_URL = https://api.telegram.org/bot<TOKEN DO SEU BOT FORNECIDO PELO BOTFATHER>/setWebhook?url=
FEED_URL = RSS a ser utilizado pelo bot
REFRESH_INTERVAL = Intervalo de tempo em minutos que o Feed será analisado
MONGO_URL = URL do seu banco de dados Mongo
```
