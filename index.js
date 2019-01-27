const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTM5MDQzODI1NTQxMzE2NjA5.Dy-Dvg.21TetZYmDS4sRgahi-MDKdK9VJM'

bot.on('message', function (message){
    if (message.content == 'Fuck')
    {
        message.reply('Please do not use Bad Words');
    }
});

bot.on("Ready",function(){
    console.log("Ready to Ban some players!);")
});

bot.login(TOKEN);
