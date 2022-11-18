const fetch = require('node-fetch');
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
module.exports = {
name: "dog",
description:"dog command",
async execute(message){
        const url = `https://dog.ceo/api/breeds/image/random`;
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${message.author.username}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
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
        const msg = await message.channel.send({ embeds: [embed],components: [row] });
        
        const collector = msg.createMessageComponentCollector({time:1000*10})
        collector.on("collect", async (btn) => {
            //message one by paddycrack

            if(btn.user.id === message.author.id){
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
              	btn.editReply('This is not your command get your own by typing !dog or /dog')
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