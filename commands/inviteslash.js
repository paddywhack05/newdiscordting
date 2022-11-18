
const{ EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');

module.exports= {
    name: "inviteslash",
    description:"invite slashcommand",
    async execute(interaction,client){
        const embed = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${interaction.user.tag}`, iconURL:interaction.user.displayAvatarURL({ dynamic: true })})
        .setTitle(`Invite Paddycrackbot to your server`)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
        .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
        .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
        .setDescription(`**[Invite me](https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot) \n[Top.gg](https://top.gg/bot/916743866915389542)**`)
        .setFooter({text:`paddycrack.com`})
        const row = new Discord.ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setEmoji(`🌐`)
            .setLabel(`Top.gg`)
            .setURL(`https://top.gg/bot/916743866915389542`)
            .setStyle(ButtonStyle.Link),
        )
        .addComponents(
            new ButtonBuilder()
            .setEmoji(`📨`)
            .setLabel(`Invite`)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
            .setStyle(ButtonStyle.Link),
        )
          await interaction.editReply({ embeds: [embed],components: [row]});
    
   }
}