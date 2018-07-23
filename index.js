const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "£";

bot.on('ready', function() {
    console.log("I'm Ready !")    
});

bot.on ('message', message => {
    if(message.content[0] === PREFIX){
        if(message.content === '£formes'){
            message.channel.send(`*Italique*
**Gras**
***Les deux !***
__Soulignement__
~~Ligne au milieu~~`);
        }
    }    
});

bot.on ('message', message => {
    if(message.content[0] === PREFIX){
        if(message.content === '£truth'){
            message.reply('https://cdn.weeb.sh/images/rJrnXJYPb.gif');
        }
    }    
});

// Commande affichant l'avatar.
bot.on ('message', message => {
    if(message.content[0] === PREFIX){
        if(message.content === '£avatar'){
            message.reply(message.author.avatarURL);
        }
    }    
});
// Commande Help.
bot.on ('message', message => {
    if(message.content[0] === PREFIX){
        if(message.content === '£help'){
            message.reply("\n£avatar \n£ping \n£rien");
        }
    }    
});

bot.on ('message', message => {
    if(message.content[0] === PREFIX){
        if(message.content === '£richEmbed'){
            message.channel.send({embed:  {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Titre',
                description: 'Desc',
                fields: [{
                    name: 'Argent: \t\t Vie:      Bouclier:',
                    value: '1.000.000$ \t\t 511/511 \t\t 255/255'
                },
            {
                name: 'Texte deux',
                value: 'Aller sur [Google](http://google.com).'
            }],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Ceci est un pied'
                }
            }});




        }
    }    
});

 

















bot.login('NDcwOTczMDc1OTkxNTYwMTky.DjeRFA.gVDRsWpW5Yeu7plHNs9UjGkdG0Q')  // token, consultable ici https://discordapp.com/developers/applications/470973075991560192/bots