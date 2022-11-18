
const fetch = require('node-fetch');
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js');
module.exports= {
name: "redditslash",
description:"redditslash command",
async execute(interaction,client,text){
    check();
    async function check(){
        const url = `https://api.reddit.com/r/${text}/.json?limit=1&?sort=hot&t=all`;
        const res = await fetch(`${url}`);
        const dat = await res.json();
        console.log(dat);
        console.log(url);
        if (dat.error === 404||dat.error === 403||dat.data.dist === 0){
            interaction.editReply({content:`subreddit not found`});
            return;
        }
       else{rfetch();}
    }
    async function rfetch(){
        try{
    redditFetch({
        
        subreddit:`${text}`,
        sort: `top`,
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
        
     }).catch(err=>{
        //console.log(err)
        interaction.editReply({content:`there was an error are you sure your sub is not nsfw`})
        console.log(err)
        return;
     })
     .then(async post => {
        if(!post){return;}
            const embed = new Discord.EmbedBuilder()
            embed.setColor(0xff0000)
            embed.setAuthor({name:`${interaction.user.username}`, iconURL:interaction.user.displayAvatarURL({ dynamic: true })})
            embed.setTitle(`${post.title}`)
            embed.setURL(`https://redd.it/${post.id}`)
            if(post.selftext){
            embed.setDescription(`${post.selftext}`)
        }
        embed.setThumbnail(`${post.url}`)
        embed.setImage(`${post.url}`)
        embed.setFooter({text:`💬 ${post.num_comments} 👍 ${post.ups}`})
    
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
            const msg = await interaction.editReply({ embeds: [embed],components: [row]});
            const collector = msg.createMessageComponentCollector({time:1000*10})
            
        collector.on("collect", async (btn) => {
                 //interaction one by paddycrack       
	if(btn.user.id === interaction.user.id){
        await btn.deferUpdate()
        if(btn.customId === 'next'){
        redditFetch({
            subreddit:`${text}`,
            sort: `top`,
            allowNSFW: false,
        allowCrossPost: true,
            allowVideo: true,
            allowModPost: true,
            
         }).catch(err=>{
            //console.log(err)
            interaction.editReply({content:`there was an error are you sure your sub is not nsfw`})
            console.log(err)
            return;
         }).then(async post => {
            if(!post){return;}
                const embed = new Discord.EmbedBuilder()
                embed.setColor(0xff0000)
                embed.setAuthor({name:`${btn.user.username}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
                embed.setTitle(`${post.title}`)
                embed.setURL(`https://redd.it/${post.id}`)
                if(post.selftext){
                embed.setDescription(`${post.selftext}`)
                }
                embed.setThumbnail(`${post.url}`)
                embed.setImage(`${post.url}`)
                embed.setFooter({text:`💬 ${post.num_comments} 👍 ${post.ups}`})
                msg.edit({embeds:[embed]})
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
            btn.editReply('This is not your command get your own by typing !reddit <sub> or /reddit')
    }
           
        })
    })
}catch(err){
    interaction.editReply('An error ocured when trying this')
    console.log(err)
} 
}
}}