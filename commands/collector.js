const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js')
module.exports= {
    name: "collector",
    description:"collector command",
    async execute(message,client){
        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId(`test`)
                .setLabel(`Next Meme`)
                .setStyle(ButtonStyle.Success),
            )
            .addComponents(
                new ButtonBuilder()
                .setLabel(`r/dankmeme`)
                .setURL(`https://www.reddit.com/r/dankmeme/`)
                .setStyle(ButtonStyle.Link),
            )
        const msg = await message.channel.send ({content: "button", components: [row]})
        const collector = msg.createMessageComponentCollector()
        collector.on("collect", async (btn) => {
           await btn.deferUpdate()
                
            msg.edit("eee")
            console.log('e')
          
        })

    }
}