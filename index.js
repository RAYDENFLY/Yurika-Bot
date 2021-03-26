const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('CYBER ON'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const dbd = require("dbd.js")

 
const bot = new dbd.Bot({
token: process.env.TOKEN
, 
prefix: "yurika " 
})
 
bot.onMessage()

bot.status({
  text: "Fantastic Magic || yurika help",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "TK From ling || yurika help",
  type: "WATCHING",
  time: 12
})
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command(command)
} 
}