const { Client, IntentsBitField, Partials, PermissionsBitField,GatewayIntentBits, ApplicationCommandType, ApplicationCommandOptionType, ChannelType, ChannelFlags, ActivityType } = require('discord.js');
module.exports= {
    name: "register",
    description:"regit bro",
    async execute(client){
const dice ={
    name:'dice',
    description:'rolls dice',
   }
   const help ={
    name:'help',
    description:'help command',
   }
   const hack ={
       name:'hack',
       description:'hacking but way better than dank memer hacking with an actual script',
   }
    const ukrainenews ={
        name:'ukrainenews',
        description:'news about ukraine',
    }
    const rap ={
        name:'rap',
        description:'gives you a fat rap',
    }
    const minecraft ={
        name:'minecraft',
        description: 'gives you stuff about minecraft',
    }
    const dog ={
        name:'dog',
        description:'gives you a dog picture',
    }
    const ring ={
        name:'ring',
        description:'plays ring sound affect',
    }
    const ukraine={
        name:'ukraine',
        description:'ukraine stuff',
    }
    const cat ={
        name:'cat',
        description: 'gives you a cat picture',
    }
    const infuriating ={
        name: 'infuriating',
        description: 'gives you somthing infuriating',
    }
    const dankmeme ={
        name: 'dankmeme',
        description:'gives you a dankmeme',
    }
  const meme ={
        name: 'meme',
        description:'gives you a meme',
  }
  const technicaly ={
    name: 'technically',
    description:'like technically',
}
const ping ={
    name: 'ping',
    description:'checks latency',
}

const trivia ={
    name: 'trivia',
    description:'trivia questions',
    
    options:[{
        name:'type',
        type:3,
        description:'Decides the category of the questions',
    choices: [
        {
            name:"General Knowledge",
            value:"9",
        },
        {
            name:"Books",
            value:"10",
        },
        {
            name:"Film",
            value:"11",
        }, 
        {
            name:"Music",
            value:"12",
        },        
        {
            name:"Theatres",
            value:"13",
        },        
        {
            name:"Television",
            value:"14",
        },        
        {
            name:"Video Games",
            value:"15",
        },        
        {
            name:"Board Games",
            value:"16",
        },        
        {
            name:"Science/Nature",
            value:"17",
        },        
        {
            name:"Computers",
            value:"18",
        },        
        {
            name:"Math",
            value:"19",
        },        
        {
            name:"Mythology",
            value:"20",
        },        
        {
            name:"Sports",
            value:"21",
        },
        {
            name:"Geography",
            value:"22",
        },        
        {
            name:"History",
            value:"23",
        },        
        {
            name:"Politics",
            value:"24",
        },        
        {
            name:"Art",
            value:"25",
        },        
        {
            name:"Celebrities",
            value:"26",
        },        
        {
            name:"Animals",
            value:"27",
        },        
        {
            name:"Vehicles",
            value:"28",
        },        
        {
            name:"Comics",
            value:"29",
        },        
        {
            name:"Gadgets",
            value:"30",
        },        
        {
            name:"Anime/Manga",
            value:"31",
        },        
        {
            name:"Cartoons",
            value:"32",
        },
    ],
    },
        {
        name:'difficulty',
        type:3,
        description:'Decides how hard the questions are',
    choices: [
        {
            name:"Easy",
            value:"easy",
        },
        {
            name:"Medium",
            value:"medium",
        },
        {
            name:"Hard",
            value:"hard",
        }, 
    ],
},],
}
const userinfo={
    name: 'userinfo',
    description:'gives you info about you',
    options:[{
        name:'member',
        type: ApplicationCommandOptionType.User,
        description:'User to get info on',
        required:'false',
    },
    ],
}
const info={
    name: 'info',
    description:'gives you info about paddycrack',
}
const invite={
    name: 'invite',
    description:'gives you an invite link',
}
const vote={
    name: 'vote',
    description:'links you to my top.gg and dbl please vote for me to spread my bot',
}
const dadjoke={
    name: 'dadjoke',
    description:'gives you a dad joke',
}
const covid={
    name: 'covid-info',
    description:'gives you covid stats worldwide',
}
    const data = {
        name: 'echo',
        description: 'echo thing',
        options:[{
            name:'yourtext',
            type: ApplicationCommandOptionType.String,
            description:'echo',
            required:'true',
        }],
    };
    const ball = {
        name: '8ball',
        description: '8ball of truth',
        options:[{
            name:'question',
            type: ApplicationCommandOptionType.String,
            description:'what will you ask the great one',
            required:'true',
        },
    ],
    };
    const reddit = {
        name: 'reddit',
        description: 'Any subreddit',
        options:[{
            name:'subreddit',
            type: ApplicationCommandOptionType.String,
            description:'decides subreddit',
            required:'true',
        },
        ],
    };
    const ub = {
        name: 'urban',
        description: 'urban dictionary defintions',
        options:[{
            name:'search',
            type: ApplicationCommandOptionType.String,
            description:'search term on urban dictionary',
            required:'true',
        },
        ],
    };
    const pokemon = {
        name: 'pokemon',
        description: 'pokemon stats',
        options:[{
            name:'pokemon',
            type: ApplicationCommandOptionType.String,
            description:'search pokemon stats with pokeapi',
            required:'true',
        },
        ],
    };
    const github = {
        name: 'github',
        description: 'github user info',
        options:[{
            name:'user',
            type: ApplicationCommandOptionType.String,
            description:'search for user info on github',
            required:'true',
        },
        ],
    };
    const command = await client.application?.commands.create(data);
    const memeslash = await client.application?.commands.create(meme);
    const dankmemeslash = await client.application?.commands.create(dankmeme);
    const infuriatingslash = await client.application?.commands.create(infuriating);
    const catslash = await client.application?.commands.create(cat);
    const ukraineslash = await client.application?.commands.create(ukraine);
    const ringslash = await client.application?.commands.create(ring);
    const dogslash = await client.application?.commands.create(dog);
    const minecraftslash = await client.application?.commands.create(minecraft);
    const rapslash = await client.application?.commands.create(rap)
    const ukrainenewsslash = await client.application?.commands.create(ukrainenews)
    const diceslash = await client.application?.commands.create(dice)
    const hackslash = await client.application?.commands.create(hack)
    const helpslash = await client.application?.commands.create(help)
    const ballslash = await client.application?.commands.create(ball)
    const redditslash = await client.application?.commands.create(reddit)
    const technicalyslash = await client.application?.commands.create(technicaly)
    const pingslash = await client.application?.commands.create(ping)
    const triviaslash = await client.application?.commands.create(trivia)
    const userinfoslash = await client.application?.commands.create(userinfo)
    const infoslash = await client.application?.commands.create(info)
    const voteslash = await client.application?.commands.create(vote)
    const inviteslash = await client.application?.commands.create(invite)
    const dadjokeslash = await client.application?.commands.create(dadjoke)
    const ubslash = await client.application?.commands.create(ub)
    const pokemonslash = await client.application?.commands.create(pokemon)
    const githubslash = await client.application?.commands.create(github)
    const covidslash = await client.application?.commands.create(covid)
}
}