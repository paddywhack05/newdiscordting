
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
name: "triviaslash",
description:"trivia command",
async execute(interaction,client,choice,type){
   const url = `https://opentdb.com/api.php?amount=1&difficulty=${choice}&type=multiple`;
   if(type){
   var res = await fetch(`${url}&category=${type}`)
   }else{var res = await fetch(`${url}`)}
   
   const data = await res.json()
   console.log(data)
   const wrong1 = data.results[0].incorrect_answers[0].replaceAll('&quot;','').replaceAll('&#039;','');
   const wrong2 = data.results[0].incorrect_answers[1].replaceAll('&quot;','').replaceAll('&#039;','');
   const wrong3 = data.results[0].incorrect_answers[2].replaceAll('&quot;','').replaceAll('&#039;','');
   const right = data.results[0].correct_answer.replaceAll('&quot;','').replaceAll('&#039;','');
   const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${interaction.user.tag}`, iconURL:interaction.user.displayAvatarURL({ dynamic: true })})
                .setTitle(`${data.results[0].question.replaceAll('&quot;','').replaceAll('&#039;','')}`)
                .setFooter({text:`Using opentdb.com`})
                let num = Math.floor(Math.random() * 4) + 1;
                const row = new Discord.ActionRowBuilder()
                console.log(num,'ddsfdfd')
                if(num === 1){
                row.addComponents(
                    new ButtonBuilder()
                    .setCustomId(`correct`)
                    .setLabel(`${right}`)
                    .setStyle(ButtonStyle.Primary),
                )
                row.addComponents(
                 new ButtonBuilder()
                 .setCustomId(`wrong3`)
                 .setLabel(`${wrong3}`)
                 .setStyle(ButtonStyle.Primary),
             )
                   row.addComponents(
                    new ButtonBuilder()
                    .setCustomId(`wrong2`)
                    .setLabel(`${wrong2}`)
                    .setStyle(ButtonStyle.Primary),
                )
                row.addComponents(
                  new ButtonBuilder()
                  .setCustomId(`wrong1`)
                  .setLabel(`${wrong1}`)
                  .setStyle(ButtonStyle.Primary),
              )
                }
                else if(num === 2){
                 
                  row.addComponents(
                   new ButtonBuilder()
                   .setCustomId(`wrong3`)
                   .setLabel(`${wrong3}`)
                   .setStyle(ButtonStyle.Primary),
               ) 
               row.addComponents(
                  new ButtonBuilder()
                  .setCustomId(`correct`)
                  .setLabel(`${right}`)
                  .setStyle(ButtonStyle.Primary),
              )
                     row.addComponents(
                      new ButtonBuilder()
                      .setCustomId(`wrong2`)
                      .setLabel(`${wrong2}`)
                      .setStyle(ButtonStyle.Primary),
                  )
                  row.addComponents(
                    new ButtonBuilder()
                    .setCustomId(`wrong1`)
                    .setLabel(`${wrong1}`)
                    .setStyle(ButtonStyle.Primary),
                )
                  }
                  else if(num === 3){
                 
                     row.addComponents(
                      new ButtonBuilder()
                      .setCustomId(`wrong3`)
                      .setLabel(`${wrong3}`)
                      .setStyle(ButtonStyle.Primary),
                  ) 
                        row.addComponents(
                         new ButtonBuilder()
                         .setCustomId(`wrong2`)
                         .setLabel(`${wrong2}`)
                         .setStyle(ButtonStyle.Primary),
                     )
                     row.addComponents(
                        new ButtonBuilder()
                        .setCustomId(`correct`)
                        .setLabel(`${right}`)
                        .setStyle(ButtonStyle.Primary),
                    )
                     row.addComponents(
                       new ButtonBuilder()
                       .setCustomId(`wrong1`)
                       .setLabel(`${wrong1}`)
                       .setStyle(ButtonStyle.Primary),
                   )
                     }
                     else if(num === 4){
                 
                        row.addComponents(
                         new ButtonBuilder()
                         .setCustomId(`wrong3`)
                         .setLabel(`${wrong3}`)
                         .setStyle(ButtonStyle.Primary),
                     ) 
                           row.addComponents(
                            new ButtonBuilder()
                            .setCustomId(`wrong2`)
                            .setLabel(`${wrong2}`)
                            .setStyle(ButtonStyle.Primary),
                        )
                        row.addComponents(
                          new ButtonBuilder()
                          .setCustomId(`wrong1`)
                          .setLabel(`${wrong1}`)
                          .setStyle(ButtonStyle.Primary),
                      )
                      row.addComponents(
                        new ButtonBuilder()
                        .setCustomId(`correct`)
                        .setLabel(`${right}`)
                        .setStyle(ButtonStyle.Primary),
                    )
                        }
         const msg = await interaction.editReply({embeds: [embed],components: [row]})
         const collector = msg.createMessageComponentCollector()
        collector.on("collect", async (btn) => {
            	//message one by paddycrack
                if(btn.user.id === interaction.user.id){
                    //console.log(btn);
                    await btn.deferUpdate()
                    if(btn.customId === 'correct'){
                      row.components.forEach(async bt => {
                        console.log(bt)
                        if(bt.data.custom_id === 'correct'){
                          console.log('trest eere');
                       await bt.setStyle(ButtonStyle.Success);
                        }
                      });
                     const embed = new Discord.EmbedBuilder()
                .setColor(0x00ff00)
                .setAuthor({name:`${btn.user.tag}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
                .setTitle(`You were right ${right} was correct`)
                     msg.edit({embeds:[embed],components: [row]})
                     collector.stop()
                }else{
                  row.components.forEach(async bt => {
                    console.log(bt)
                    if(bt.data.custom_id === 'correct'||bt.data.custom_id===btn.customId){
                      console.log('trest eere');
                      if(bt.data.custom_id ==='correct'){
                   await bt.setStyle(ButtonStyle.Success);
                      }
                      if(bt.data.custom_id ===btn.customId){
                        await bt.setStyle(ButtonStyle.Danger);
                           }
                    }
                  });
                  const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${btn.user.tag}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
                .setTitle(`You were wrong, this is the right answer ${right}`)
                     msg.edit({embeds:[embed],components: [row]})
                     collector.stop()
                }   
               }else{
                         await btn.deferReply({ephemeral: true});
                        btn.editReply('This is not your command get your own by typing /trivia')
                    }
           })
         }
      
      }