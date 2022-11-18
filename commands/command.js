
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
module.exports= {
    name: "command",
    description:"command command",
    async execute(message,client){
       

            const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${message.author.tag}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
                .setTitle(`Paddycrackbot Help`)
                .setURL(`https://paddycrack.com/bot`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setDescription(`**COMMANDS**\n!meme, !infuriating, !cat, !dog, !minecraft, !dankmeme,\n !ukraine, !ukraine news, do a barrel roll, !rickroll !hack, !ascii \n\n**DOCUMENTATION**\n**Type /** to view the slash command options or **[look at the documentation](https://paddycrack.com/bot)** to see what it all does\n\n **SOCIALS**\n **[Youtube](https://www.youtube.com/channel/UCmd3UCWz0LXd0CHQ0g6vQ4A) | [Twitch](https://www.twitch.tv/paddycrack_) | [Discord](https://discord.gg/yFZXQB8cjx)**\n\n**LINKS**\n**[Website](https://paddycrack.com) | [Github](https://github.com/paddywhack05/botthing) | [Top.gg](https://top.gg/bot/916743866915389542)**`)
                .setFooter({text:`paddycrack.com`})
                const row = new Discord.ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setEmoji(`🌐`)
                    .setLabel(`Website`)
                    .setURL(`https://paddycrack.com`)
                    .setStyle(ButtonStyle.Link),
                )
                .addComponents(
                    new ButtonBuilder()
                    .setEmoji(`🛠`)
                    .setLabel(`Support server`)
                    .setURL(`https://discord.gg/Pd5rRpM9y9`)
                    .setStyle(ButtonStyle.Link),
                )
             
              message.channel.send({ embeds: [embed],components: [row]});
            
        
    }
}