const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const {getUserAvatar} = require('./../tools/getRedditUser')
module.exports= {
name: "minecraftslash",
description:"minecraft command",
execute(interaction,client){
    fetch();
    function fetch(){
     redditFetch({
    subreddit:'memes',
    sort: 'top',
    allowNSFW: false,
   allowCrossPost: true,
    allowVideo: true,
    allowModPost: false,
   }).then(async post => {
           const embed = new Discord.EmbedBuilder()
           .setColor(0xff0000)
           .setAuthor({name:`${post.author}`, iconURL:await getUserAvatar(post.author)})
           .setTitle(`${post.title}`)
           .setURL(`https://redd.it/${post.id}`)
           .setThumbnail(`${post.url}`)
           //.addField('field test','field description test')
           .setImage(`${post.url}`)
           .setFooter({text:`💬 ${post.num_comments} 👍 ${post.ups}`})
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
            .setLabel(`r/Minecraft`)
            .setURL(`https://www.reddit.com/r/Minecraft/`)
            .setStyle(ButtonStyle.Link),
        )
        const msg = await interaction.editReply({ embeds: [embed],components: [row] })
        const collector = msg.createMessageComponentCollector({time:1000*10})
        collector.on("collect", async (btn) => {
                 //interaction one by paddycrack       
	if(btn.user.id === interaction.user.id){
        await btn.deferUpdate()
        if(btn.customId === 'next'){
        redditFetch({
         subreddit:'memes',
         sort: 'top',
         allowNSFW: false,
        allowCrossPost: true,
         allowVideo: true,
         allowModPost: false,
        }).then(async pos => {
        let embed = new Discord.EmbedBuilder()
        embed.setColor(0xff0000)
        embed.setAuthor({name:`${pos.author}`, iconURL:await getUserAvatar(pos.author)})
        embed.setTitle(`${pos.title}`)
        embed.setURL(`https://redd.it/${pos.id}`)
        embed.setThumbnail(`${pos.url}`)
        //.addField('field test','field description test')
        embed.setImage(`${pos.url}`)
        embed.setFooter({text:`💬 ${pos.num_comments}  👍 ${pos.ups}`})
         msg.edit({embeds:[embed]})
         console.log('e')
     })
    }else if(btn.customId ==='dis'){
        row.components.forEach(bt => {
        bt.setDisabled(true);
       });

        msg.edit({components:[row]})
        collector.stop() 
    }
    collector.on('end',()=>{
        row.components.forEach(bt => {
            bt.setDisabled(true);
           })
        })
    }else{
             await btn.deferReply({ephemeral: true});
            btn.editReply('This is not your command get your own by typing !minecraft or /minecraft')
    }
           
        }) 
        
           
           console.log(post);
      
   });
  
}}}