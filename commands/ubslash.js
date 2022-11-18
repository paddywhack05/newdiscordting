const{EmbedBuilder,Embed} = require('discord.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "ubslash",
    description:"ubslash command",
    async execute(interaction,client,text){
        
        const url = `https://api.urbandictionary.com/v0/define?term=${text}`;
                const response = await fetch(`${url}`)
const {list} = await response.json()
const [dat] = list;
       if(!dat){interaction.editReply({content:"that is not a word acording to Urban dictionary"}); return;}
            e();
            async function e(){
            const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${interaction.user.tag}`, iconURL:interaction.user.displayAvatarURL({ dynamic: true })})
                .setTitle(`Definition of ${dat.word}`)
                .setURL(`${dat.permalink}`)
                .addFields([
                    {name:`Definition`,value:`${dat.definition}`},
                    {name:`Example`,value:`${dat.example}`},
                ])
                .setFooter({text:`👍${dat.thumbs_up}  👎${dat.thumbs_down}  AUTHOR ${dat.author}`})
              interaction.editReply({ embeds: [embed]});
            
        }
    }
}