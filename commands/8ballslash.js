
const{EmbedBuilder,Embed} = require('discord.js');
const Discord = require('discord.js');

module.exports= {
    name: "8ballslash",
    description:"8ball slashcommand",
    execute(interaction,client,text){
        
        const response = [
            'No idiot',
            'Duh',
            'Ask later',
            'Yes',
            'No',
            'I\'m telling you, Molotov cocktails work. Anytime I had a problem and I threw a Molotov cocktail, boom! Right away, I had a different problem. - Jason Mendoza,',
          ];
          const res = Math.floor(Math.random() * 6) + 1;
          const ans = response[res - 1];
        const embed = new Discord.EmbedBuilder()
        .setColor(0xff0000)
        .setAuthor({name:`${interaction.user.tag}`, value:`${interaction.user.displayAvatarURL({ dynamic: true })}`})
        .setTitle(`${text}?`)
        .setDescription(`${ans}`)
        .setThumbnail(`https://media.istockphoto.com/photos/billiard-game-ball-black-8-isolated-against-white-background-3d-picture-id1171194385?k=20&m=1171194385&s=612x612&w=0&h=U-mQPNhnXhmJuGIPIJNLnIypN9HxGjqQvcmjeEtzWBc=`)
        .setFooter({text:`paddycrack.com`})

        interaction.editReply({embeds: [embed]})
        
    }
}