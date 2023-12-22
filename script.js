const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const urlParser = bodyParser.urlencoded({ extended: false })

const TelegramBot = require('node-telegram-bot-api');

const token = '6475700914:AAG-ydFUPIuuzuZS-Y4vqtceN4ZJrT3bhhc';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, msg.text)
})

app.listen(3000)