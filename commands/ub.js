const{EmbedBuilder,Embed} = require('discord.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "ub",
    description:"ub command",
    async execute(message,client){
        const text1 = message.content.split(' ');
        const text = text1[1]
        if(!text){
        message.reply("You have to enter a term like \n !urban <term>"); return;
        }
        const url = `https://api.urbandictionary.com/v0/define?term=${text}`;
                const response = await fetch(`${url}`)
const {list} = await response.json()
const [dat] = list;
       if(!dat){message.reply("that is not a word acording to Urban dictionary"); return;}
                const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${message.author.tag}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
                .setTitle(`Definition of ${dat.word}`)
                .setURL(`${dat.permalink}`)
                .addFields([
                    {name:`Definition`,value:`${dat.definition}`},
                    {name:`Example`,value:`${dat.example}`},
                ])
                .setFooter({text:`👍${dat.thumbs_up}  👎${dat.thumbs_down}  AUTHOR ${dat.author}`})
              message.channel.send({ embeds: [embed]});
            
        
    }
}