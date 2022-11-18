
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const {getUserAvatar} = require('./../tools/getRedditUser')
module.exports = {
name: "meme",
description:"meme command",
async execute(message,client){

     redditFetch({
    subreddit:'memes',
    sort: 'top',
    allowNSFW: false,
   allowCrossPost: true,
    allowVideo: true,
    allowModPost: false,
   }).then(async post => {    
    //console.log(post);
    //preview
        const embed = new Discord.EmbedBuilder()
        embed.setColor(0xff0000)
        embed.setAuthor({name:`${post.author}`, iconURL:await getUserAvatar(post.author)})
        embed.setTitle(`${post.title}`)
        embed.setURL(`https://redd.it/${post.id}`)
        
        embed.setThumbnail(`${post.thumbnail}`)
        //.addField('field test','field description test')
        embed.setImage(`${post.url}`)
        embed.setFooter({text:`💬 ${post.num_comments}  👍 ${post.ups}`})
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
            .setLabel(`r/memes`)
            .setURL(`https://www.reddit.com/r/memes/`)
            .setStyle(ButtonStyle.Link),
        )
        const msg = await message.channel.send({ embeds: [embed],components: [row] });
        //const collector = message.channel.createMessageComponentCollector()
        const collector = msg.createMessageComponentCollector({time:1000*10})
        collector.on("collect", async (btn) => {
            	//message one by paddycrack
                if(btn.user.id === message.author.id){
                    collector.resetTimer();
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
                    embed.setThumbnail(`${pos.thumbnail}`)
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
                }else{
                         await btn.deferReply({ephemeral: true});
                        btn.editReply('This is not your command get your own by typing !meme or /meme')
                    }
            
        }) 
     
   });

}}