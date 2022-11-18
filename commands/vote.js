const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
module.exports= {
    name: "vote",
    description:"vote command",
    async execute(message,client){
            
            const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${message.author.tag}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
                .setTitle(`Vote for us`)
                .setURL(`https://top.gg/bot/916743866915389542/vote`)
                .setDescription(`**[VOTE ON TOP.GG](https://top.gg/bot/916743866915389542/vote)** | **[VOTE ON DBL](https://discordbotlist.com/bots/paddycrackbot/upvote)**`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setFooter({text:`paddycrack.com`})
                const row = new Discord.ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setEmoji(`🤖`)
                    .setLabel(`Vote on Top.gg`)
                    .setURL(`https://top.gg/bot/916743866915389542/vote`)
                    .setStyle(ButtonStyle.Link),
                )
                .addComponents(
                    new ButtonBuilder()
                    .setEmoji(`🤖`)
                    .setLabel(`Vote on DBL`)
                    .setURL(`https://discordbotlist.com/bots/paddycrackbot/upvote`)
                    .setStyle(ButtonStyle.Link),
                )
              message.channel.send({ embeds: [embed],components:[row]});
            
    }
}