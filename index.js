const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("*help pour plus d'informations");
    console.log("Connectedç");
});

bot.login("NDc2MzcxNDUyMDI3ODYzMDUw.Dk3DvQ.8_t5ut7P0bP1-qiMAUe7HSbMNXc");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("**__Aide:__** \n -__help:__ afficher ce message \n -__youtube:__ afficher la chaîne youtube de NeoflasH");
    }
bot.on('message', message => {
    if (message.content === prefix + "youtube"){
        message.channel.sendMessage("Chaîne Youtube de NeoflasH : https://www.youtube.com/channel/UCDBIzgcBjtlGjnj6jkbZsnA?");
    }
});