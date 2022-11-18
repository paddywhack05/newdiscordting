const fetch = require('node-fetch');
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
module.exports = {
name: "dogslash",
description:"dog command",
async execute(interaction){
        const url = `https://dog.ceo/api/breeds/image/random`;
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL({ dynamic: true })})
        .setTitle(`Dogo`)
        .setURL(`https://dog.ceo`)
        .setImage(`${data.message}`)
        .setFooter({text:`source dog.ceo`})
        const row = new Discord.ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`next`)
            .setLabel(`Next`)
            .setStyle(ButtonStyle.Success),
        )
        .addComponents(
         new ButtonBuilder()
         .setCustomId(`dis`)
         .setLabel(`End`)
         .setStyle(ButtonStyle.Secondary),
     )
        .addComponents(
         new ButtonBuilder()
         .setLabel(`dog.ceo`)
         .setURL(`https://dog.ceo/`)
         .setStyle(ButtonStyle.Link),
     )
        const msg = await interaction.editReply({ embeds: [embed],components: [row] });
        
        const collector = msg.createMessageComponentCollector({time:10*1000})
        collector.on("collect", async (btn) => {
                //interaction one by paddycrack       
	if(btn.user.id === interaction.user.id){
        console.log(btn);
        await btn.deferUpdate()
        if(btn.customId === 'next'){
        const url = `https://dog.ceo/api/breeds/image/random`;
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${btn.user.username}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
        .setTitle(`Dogo`)
        .setURL(`https://dog.ceo`)
        .setImage(`${data.message}`)
        .setFooter({text:`source dog.ceo`})
        msg.edit({embeds:[embed]})
    }else if(btn.customId ==='dis'){
        collector.stop() 
    }
    }else{
             await btn.deferReply({ephemeral: true});
            btn.editReply('This is not your command get your own by typing ! or /')
    }    
    collector.on("end", async (collected) => {
        console.log('collector ended ',collected.size)
        row.components.forEach(bt => {
            bt.setDisabled(true);
           });
  
            msg.edit({components:[row]})
    })
        }) 
}}