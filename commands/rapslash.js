
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "rapslash",
description:"rapslash command",
execute(interaction){
    redditFetch({
        subreddit:'raplyrics',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
            interaction.editReply(`here is a rap ${interaction.user.tag} TITLE ${post.title} RAP ${post.selftext} ${post.url}`);      
         });
}}