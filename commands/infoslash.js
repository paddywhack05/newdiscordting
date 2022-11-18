const{EmbedBuilder,Embed} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "infoslash",
    description:"info command",
    execute(interaction,client){
       
            e();
            async function e(){
            const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setTitle(`${client.user.username} information`)
                .setURL(`https://paddycrack.com`)
                .setDescription(`**Bot id: ${client.user.id}**\n **Serving in ${client.guilds.cache.size} servers** \n **Latency is ${Date.now() - interaction.createdTimestamp}ms**\n**[Bot Github](https://github.com/paddywhack05/botthing)**`)
                .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setFooter({text:`paddycrack.com`})
               
             
                interaction.editReply({ embeds: [embed]});
            
        }
    }
}