

const{ EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');

module.exports= {
    name: "join",
    description:"join command",
    execute(guild,client,owner,channel){
        const embed = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${guild.name}`, iconURL:`${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`})
        .setTitle(`${guild.name}`)
        .setURL(`https://discord.com/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
        .setDescription(` **Thank you for inviting me \n[Invite](https://discord.com/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot) | [Discord](https://discord.gg/yFZXQB8cjx)**\n\n**LINKS**\n**[Website](https://paddycrack.com) | [Github](https://github.com/paddywhack05/botthing) | [Top.gg](https://top.gg/bot/916743866915389542) | [DBL](https://discordbotlist.com/bots/paddycrackbot)**`)
        .setThumbnail(`${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`)
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
            .setEmoji(`🌐`)
            .setLabel(`Top.gg`)
            .setURL(`https://top.gg/bot/916743866915389542`)
            .setStyle(ButtonStyle.Link),
        )
        .addComponents(
            new ButtonBuilder()
            .setEmoji(`🌐`)
            .setLabel(`DBL`)
            .setURL(`https://discordbotlist.com/bots/paddycrackbot`)
            .setStyle(ButtonStyle.Link),
        )
        if(!channel){
            console.log("no permissions");
        }else{
            try{
        channel.send({ embeds: [embed],components: [row] });
            }catch(err){
                console.log('err join msg')
            }
    }
//---------------------------------------------------------------------------------------------owner send--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        const embe = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${guild.name}`, iconURL:`${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`})
        .setTitle(`${guild.name}`)
        .setURL(`https://paddycrack.com`)
        .setDescription(`Thank you for choosing Paddycrack go to my [website](https://paddycrack.com)\n Vote for me on [Top.gg](https://top.gg/bot/916743866915389542/vote) or [DBL](https://discordbotlist.com/bots/paddycrackbot/upvote) if you want to get notified when you vote join [my comunity server](https://discord.gg/yFZXQB8cjx) it will also put your username on a list on my server when you join`)
        .setThumbnail(`${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`)
        .setFooter({text:`paddycrack.com`})
        const ro = new Discord.ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setEmoji(`🌐`)
            .setLabel(`Website`)
            .setURL(`https://paddycrack.com`)
            .setStyle(ButtonStyle.Link),
        )
        .addComponents(
            new ButtonBuilder()
            .setEmoji(`🌐`)
            .setLabel(`Top.gg`)
            .setURL(`https://top.gg/bot/916743866915389542`)
            .setStyle(ButtonStyle.Link),
        )
        .addComponents(
            new ButtonBuilder()
            .setEmoji(`🌐`)
            .setLabel(`DBL`)
            .setURL(`https://discordbotlist.com/bots/paddycrackbot`)
            .setStyle(ButtonStyle.Link),
        )
       owner.send({ embeds: [embe],components: [ro] });
   }
}