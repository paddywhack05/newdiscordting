const{EmbedBuilder,Embed} = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');
module.exports= {
    name: "userinfo",
    description:"userinfo command",
    execute(message){
            if(!message.guild){
             console.log("dm detected")
             message.reply("You cant use this command in dms");
            }
            else{
            e();
        }
            async function e(){
                const Target = message.mentions.users.first()||message.author;
                const Member = message.guild.members.cache.get(Target.id);
                const e = moment(Date.now()).diff(Target.createdAt)/8.64e+7;
            const daysin = Math.round(e);
            const r = moment(Date.now()).diff(Member.joinedAt)/8.64e+7;
            const memsin = Math.round(r);
            console.log(daysin);
            console.log(memsin);

                const rol = Member.roles.cache.map(r=>r).length - 1;
                
                const embed = new Discord.EmbedBuilder()
                embed.setColor(Member.displayHexColor||0xff0000)
                embed.setAuthor({name:`${Target.tag}`, iconURL:Target.displayAvatarURL({ dynamic: true })})
                embed.setTitle(`${Target.username} information`)
                embed.setImage(`${Target.displayAvatarURL({ dynamic: true })}`)
                embed.setThumbnail(`${Target.displayAvatarURL({ dynamic: true })}`)
                embed.setDescription(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}\n **Been a member for:** ${memsin} days\n **Joined discord ** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}\n**Discord user for:** ${daysin} days\n**Nickname: ${Member.nickname}**\n**User id: ${Target.id}**\n**Role color: ${Member.displayHexColor}**\n`)
                if(rol){
                embed.addFields({name:`Roles[${rol}]`,value:`${Member.roles.cache.map(r=>r).join(' ').replace("@everyone",'')}`})
                }else{
                    embed.addFields({name:`Roles[0]`,value:`No roles!?`})
                }
                embed.setFooter({text:`paddycrack.com`})
               
              message.channel.send({ embeds: [embed]});
            }
        }
    }
