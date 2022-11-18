
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
const url ='https://cataas.com/cat?json=true';
const start='https://cataas.com';
const fetch = require('node-fetch')
module.exports = {
name: "cat",
description:"cat command",
async execute(message){   
    const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed = new Discord.EmbedBuilder()
        embed.setThumbnail(`${start+data.url}`)
        embed.setImage(`${start+data.url}`)
        embed.setColor(0xff0000)
        embed.setAuthor({name:`${message.author.username}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
        embed.setTitle(`Cat`)
        embed.setURL(`https://cataas.com`)
        embed.setFooter({text:`source cataas.com`})
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
            .setLabel(`cataas.com`)
            .setURL(`https://cataas.com`)
            .setStyle(ButtonStyle.Link),
        )

        const msg = await message.channel.send({ embeds: [embed],components: [row] });
        //const filter = (m)=> m.user.id === message.author.id;
        const collector = msg.createMessageComponentCollector({time:10*1000})
        collector.on("collect", async (btn) => {
            if(btn.user.id === message.author.id){
                console.log(btn);
                await btn.deferUpdate()
                if(btn.customId === 'next'){
                    collector.resetTimer();
                    const res = await fetch(`${url}`);
                    const data = await res.json();
                    console.log(data)
                    console.log(res);
                    const embed = new Discord.EmbedBuilder()
                    embed.setThumbnail(`${start+data.url}`)
                    embed.setImage(`${start+data.url}`)
                    embed.setColor(0xff0000)
                    embed.setAuthor({name:`${btn.user.username}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
                    embed.setTitle(`Cat`)
                    embed.setURL(`https://cataas.com`)
                    embed.setFooter({text:`source cataas.com`})
                     msg.edit({embeds:[embed]})
                     console.log('e')
                }else if(btn.customId ==='dis'){
                    collector.stop() 
                }
               
            }else{
                     await btn.deferReply({ephemeral: true});
                    btn.editReply('This is not your command get your own by typing !cat or /cat')
            }
            collector.on("end", async (collected) => {
                console.log('collector ended ',collected.size)
                row.components.forEach(bt => {
                    bt.setDisabled(true);
                   });
          
                    msg.edit({components:[row]})
            })
   });

}}