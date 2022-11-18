const { EmbedBuilder, Embed, }=require('discord.js')
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "githubslash",
    description:"github slash command",
    async execute(interaction,client,text){
        const url = `https://api.github.com/users/${text}`;

                const res = await fetch(`${url}`)
                console.log(res);
                if(res.status===200){
                const data = await res.json()
                
       if(data.message){interaction.editReply("that is not a github user see if you misspelled the name"); return;}
       else{
       console.log(data)
            e();
       }
            async function e(){
                //console.log(dat.list)
            const embed = new Discord.EmbedBuilder()
                embed.setColor(0xff0000)
                embed.setAuthor({name:`${interaction.user.tag}`, iconURL:interaction.user.displayAvatarURL({ dynamic: true })})
                embed.setThumbnail(data.avatar_url)
                embed.setTitle(`${data.login.charAt(0).toUpperCase() + data.login.slice(1)}`)
                embed.setURL(`${data.html_url}`)
                if(data.bio){
                    embed.addField(`📖Bio`,`${data.bio}`,true)
                }
                if(data.email){
                    if(data.hireable){
                    embed.addFields({name:`📨Email`,value:`mail them if you need what they do they are hireable[${data.email}](mailto:${data.email})`,inline:true})
                    }else{
                        embed.addFields({name:`📨Email`,value:`${data.email}`,inline:true})
                    }
                }
                if(data.company){
                    embed.addFields({name:`💼Company`,value:`${data.company}`,inline:true})
                }

                if(data.hireable){
                    embed.addFields({name:`Hireable`,value:`Hire them`,inline:true})
                }
                if(data.name){
                    embed.addFields({name:`Name`,value:`${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,inline:true})
                }
                if(data.twitter_username){
                    embed.addFields({name:`📱twitter`,value:`${data.twitter_username}`,inline:true})
                }
                if(data.location){
                    embed.addFields({name:`🗺Location`,value:`${data.location}`,inline:true})
                }
                if(data.blog){
                    //embed.addField(`🌐Blog`,`**[${data.blog}](${data.blog})**`,true)
                    embed.addFields({name:`🌐Blog`,value:`**[${data.blog}](${data.blog})**`,inline:true})
                }
                embed.addFields([
                    {name:`Followers[${data.followers}]`,value:`${data.login} has ${data.followers} followers`,inline:true},
                    {name:`Public repos[${data.public_repos}]`,value:`${data.login} has ${data.public_repos} public repos`,inline:true},
                    {name:`User Created`,value:`${data.login} was created ${data.created_at}`,inline:true},
                ])
                embed.setFooter({text:`Using github rest api`})
                
              interaction.editReply({ embeds: [embed]});
                }
            }else{interaction.editReply("that is not a github user see if you misspelled the name"); return;}
                
            
    }
}