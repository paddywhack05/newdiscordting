const fetch = require('node-fetch');
async function getUserAvatar(name){
    var url = `https://www.reddit.com/user/${name}/about.json`
    const res = await fetch(url)
    const data = await res.json();
    const img = data.data.icon_img.split('?')[0];
        return img;
}
module.exports = {getUserAvatar};