//const fetch = require('node-fetch');
//ee
require('dotenv').config();
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const { Client, IntentsBitField, Partials, PermissionsBitField,GatewayIntentBits, ApplicationCommandType, ApplicationCommandOptionType, ChannelType, ChannelFlags, ActivityType } = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const fs = require('fs');
const console = require('console');
const { description } = require('./commands/infuriatingslash');

/*process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err,err.stack);
  });*/
//const meme = require('./commands/meme');
const myIntents = new IntentsBitField();
myIntents.add(GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMembers,GatewayIntentBits.DirectMessages,GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent);
const client = new Discord.Client({ partials: [Partials.Message, Partials.Channel, Partials.Reaction], intents: myIntents }); 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.tools = new Discord.Collection();
const registerFiles = fs.readdirSync('./tools').filter(file => file.endsWith('.js'));
for (const file of registerFiles){
    const register = require(`./tools/${file}`);
    client.tools.set(register.name, register);
}
client.on('ready', async() =>{
    console.log('its ready');
    const bot_guilds = client.guilds.cache.map(guild=> guild.name)
    console.log(client.guilds.cache.map(guild=> guild.name));
    console.log(bot_guilds);
    console.log(client.guilds.cache.size)
    client.tools.get('register').execute(client);
        client.user.setStatus('online');
        setInterval(function () {
            client.user.setPresence({
                activities: [{ name: `${client.guilds.cache.size} servers !vote`, type: ActivityType.Watching }],
              });
        }, 1000);
});
client.on("interactionCreate", async (interaction) => {
    try{
         if (interaction.isCommand()){
            await interaction.deferReply();
            if(interaction.commandName==='userinfo'){
                const text = interaction.options.getUser('member');
                client.commands.get('userinfoslash').execute(interaction,client,text);
            }
            if(interaction.commandName==='covid-info'){
                client.commands.get('covidslash').execute(interaction,client);
            }
            if(interaction.commandName==='urban'){
                const text = interaction.options.getString('search');
                client.commands.get('ubslash').execute(interaction,client,text);
            }
            if(interaction.commandName==='trivia'){
                try{
                    console.log(interaction.options._hoistedOptions)
                const choice = interaction.options.get('difficulty').value;
                const type = interaction.options.get('type').value;
                client.commands.get('triviaslash').execute(interaction,client,choice,type);
                }catch{
                    dif=['easy','medium','hard']
                    let choice = dif[Math.floor(Math.random()*3)]
                    client.commands.get('triviaslash').execute(interaction,client,choice);
                }
            }
            if(interaction.commandName==='pokemon'){
                const text = interaction.options.getString('pokemon').toLowerCase();
                client.commands.get('pokemonslash').execute(interaction,client,text);
            }
            if(interaction.commandName==='github'){
                const text = interaction.options.getString('user').toLowerCase();
                client.commands.get('githubslash').execute(interaction,client,text);
            }
             
            if(interaction.commandName==='invite'){
                client.commands.get('inviteslash').execute(interaction,client);
            }
            if (interaction.commandName ==='8ball'){
                const text = interaction.options.getString('question');
                if(text.length>250){
                    interaction.editReply({content:`8ball cant do questions over 250 characters`})
                    return;
                }else{
                client.commands.get('8ballslash').execute(interaction,client,text);
                }
            }
            if(interaction.commandName==='info'){
                client.commands.get('infoslash').execute(interaction,client);
            }
            if(interaction.commandName==='dadjoke'){
                client.commands.get('dadjokeslash').execute(interaction,client);
            }
            if(interaction.commandName==='help'){
                client.commands.get('helpslash').execute(interaction,client);
            }
            if(interaction.commandName==='ping'){
                interaction.reply(`right back at you latency is ${Date.now() - interaction.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`);
            }
            if(interaction.commandName==='hack'){
                client.commands.get('hackslash').execute(interaction,client);
            }
            if(interaction.commandName==='ukrainenews'){
                client.commands.get('ukrainenewsslash').execute(interaction,client);
            }
            if(interaction.commandName==='dice'){
                client.commands.get('diceslash').execute(interaction,client);
            }
            if(interaction.commandName==='rap'){
                client.commands.get('rapslash').execute(interaction,client);
            }
            if(interaction.commandName==='minecraft'){
                client.commands.get('minecraftslash').execute(interaction,client);
            }
            if(interaction.commandName==='dog'){
                client.commands.get('dogslash').execute(interaction,client);
            }
            if(interaction.commandName==='ring'){
                client.commands.get('ringslash').execute(interaction,client);
            }
            if(interaction.commandName === 'ukraine'){
                client.commands.get('ukraineslash').execute(interaction,client);
            }
            if(interaction.commandName === 'cat'){
               // interaction.reply({content: 'loading cat...', ephemeral: false}).then(interaction.deleteReply())
                client.commands.get('catslash').execute(interaction,client);
            }
            if(interaction.commandName === 'infuriating'){
                client.commands.get('infuriatingslash').execute(interaction,client);
            }
            if(interaction.commandName === 'dankmeme'){
                client.commands.get('dankmemeslash').execute(interaction,client);
            }
            if (interaction.commandName === 'meme'){
                 client.commands.get('memeslash').execute(interaction,client);
            }
            if (interaction.commandName ==='echo'){
                const text = interaction.options.getString('yourtext');
                 if(text.length>1500){
                    await interaction.editReply({content:'I cant echo a message over 1500 letters'});
                    return;
                }else{
                    await interaction.editReply({content: `${interaction.user.tag} says `+text + '.', ephemeral: false});
                }
            }
            if (interaction.commandName ==='reddit'){
                const text = interaction.options.getString('subreddit');
                client.commands.get('redditslash').execute(interaction,client,text);
            }
            if (interaction.commandName ==='technically'){
                client.commands.get('technicallyslash').execute(interaction,client);
            }
            if (interaction.commandName ==='vote'){
                client.commands.get('voteslash').execute(interaction,client);
            }
        }
    }
    catch(err){
    console.log("err ",err);
    interaction.editReply({content:'your text input exceeded the discord character limit'})
    }
    })
    
client.on('guildCreate', async guild => {
    try{
    console.log(guild.name);
    const channel = guild.channels.cache.find(channel => channel.type === ChannelType.GuildText && channel.permissionsFor(guild.members.me).has(PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel))
    const owner = await guild.fetchOwner();
    client.commands.get('join').execute(guild,client,owner,channel);
    }
    catch(err){
        console.log('error ',err)
    }
})
client.on('messageCreate', async message =>{
    try{
    if(message.channelId ==='944633349274763277'){
        var e = message.content;
        var r = e.replace('<@','').replace('>','');
        var er = message.mentions.users.first();
        if(!er){return;}
        else{
            console.log(er);
    try{ 
    er.send("Thank you for voting "+message.author.username);
    }catch (err) {
    console.error(err);
    message.channel.send("He voted but he is not here"); return;
  
}
}
    }

    //if(!message.guild||message.channel.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL)){
    if (message.content.toLowerCase() ==="!meme"){
        console.log('meme')
        client.commands.get('meme').execute(message,client);
  
    }
    if (message.content.toLowerCase().startsWith("!github")){
        client.commands.get('github').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!reddit")){
        client.commands.get('reddit').execute(message,client);
    }
    if (message.content.toLowerCase()==="!trivia"){
        client.commands.get('trivia').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!8ball")){
        const text = message.content.split(' ')[1]
        if(!text||message.content.length>256){
            if(!text){message.reply("you have to ask a question like !8ball <question>");}
            if(message.content.length >256){message.reply("8ball does not accept questions over 250 characters");}
        }else{
        client.commands.get('8ball').execute(message,client,text);
    }
    }
    if (message.content.toLowerCase().startsWith("!pokemon")){
        const text = message.content.split(' ')[1]
        client.commands.get('pokemon').execute(message,client,text)
    }
    if (message.content.toLowerCase().startsWith("!urban")){
        client.commands.get('ub').execute(message,client);
    }
    if(message.content.toLowerCase()==='!dadjoke'){
        client.commands.get('dadjoke').execute(message,client);
    }
    if(message.content.toLowerCase()==='!test'){
        client.commands.get('collector').execute(message,client);
    }
    if(message.content.toLowerCase()==='!covid'||message.content.toLowerCase()==='!covid-info'){
        client.commands.get('covid').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!userinfo")){
        client.commands.get('userinfo').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!invite"){
        client.commands.get('invite').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!info"){
        client.commands.get('info').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!rickroll"){
        client.commands.get('rickroll').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!rickroll")){
        client.commands.get('rickroll').execute(message,client);
    }
    
    if (message.content.toLowerCase() ==="!button"){
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://www.reddit.com/r/memes/")
            .setLabel("r/memes")
        );
        message.channel.send({content: "meme of the day", components:[row]});
    }
    
    if (message.content.toLowerCase() === "!ring"){ 
       client.commands.get('ring').execute(message,client);
    }
    if (message.content.toLowerCase() === "!vote"){ 
        client.commands.get('vote').execute(message,client);
     }
     if (message.content.toLowerCase() === "!8ball"){ 
        client.commands.get('8ball').execute(message,client);
     }
    
    if (message.content.toLowerCase() === "!hack"){
        client.commands.get('hack').execute(message,client);
    }
    if (message.content.toLowerCase() === "cat exspectedpasses.txt"){
        message.channel.send("d3ad16e86a2bf2c2ad74cc177ae69025: I cant belive you looked it up")
    }
    if (message.content === '!ping') {  
        message.channel.send(`right back at you latency is ${Date.now() - message.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`);
      }
    if (message.content.toLowerCase() === "!dice"){ 
        client.commands.get('dice').execute(message,client);
    }
    if (message.content.toLowerCase() === "do a barrel roll"){ 
        client.commands.get('roll').execute(message,client);
     }

    if (message.content.toLowerCase() === "!infuriating"){ 
        client.commands.get('infuriating').execute(message,client);
 }
 if (message.content.toLowerCase() === "!cat"){ 
    cat();
    function cat(){
    client.commands.get('cat').execute(message,client);
     }
}

if (message.content.toLowerCase() === "!dog"){ 
client.commands.get('dog').execute(message,client);
}

if (message.content.toLowerCase() === "!minecraft"){ 
client.commands.get('minecraft').execute(message,client);
}
if (message.content.toLowerCase() === "!dankmeme"){ 
client.commands.get('dankmeme').execute(message,client);
}

if (message.content.toLowerCase() === "!rap"){ 
client.commands.get('rap').execute(message,client);
}
if (message.content.toLowerCase() === "!ukraine news"||message.content.toLowerCase() ==="!ukrainenews"){ 
client.commands.get('ukrainenews').execute(message,client);
}

if (message.content.toLowerCase() === "!ukraine"){ 
    client.commands.get('ukraine').execute(message,client);
}
if (message.content.toLowerCase() === "!technically"||message.content.toLowerCase() === "!technicallythetruth"){ 
    client.commands.get('technically').execute(message,client);
}
if (message.content.toLowerCase() === '!commands'||message.content.toLowerCase()==='!help') {
client.commands.get('command').execute(message,client);
}

    if (message.content.toLowerCase() === 'up, up, down, down, left, right, left, right, b, a'|| message.content.toLowerCase === "up up down down left right left right b a") {
    client.commands.get('konamicode').execute(message,client);
    }
    if (message.content.toLowerCase() === 'hi bot') {
    client.commands.get('hibot').execute(message,client);
    }

    if (message.channel.type == 'DM') {
        if(message.author.id === client.user.id){return;}
        console.log('Dm recieved!')
     }
    //}
}catch(err){
    console.log("error msg ",err)
}
});




client.login(process.env.TOKEN);