const{EmbedBuilder,Embed} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "info",
    description:"info command",
    execute(message,client){
       
            e();
            async function e(){
            const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setTitle(`${client.user.username} information`)
                .setURL(`https://paddycrack.com`)
                .setDescription(`**Bot id: ${client.user.id}**\n **Serving in ${client.guilds.cache.size} servers** \n **Latency is ${Date.now() - message.createdTimestamp}ms**\n**[Bot Github](https://github.com/paddywhack05/Newbot)**`)
                .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setFooter({text:`paddycrack.com`})
               
             
              message.reply({ embeds: [embed]});
            
        }
    }
}