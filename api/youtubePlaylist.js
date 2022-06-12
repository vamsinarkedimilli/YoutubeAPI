const request = require('request')
const youtubePlaylist = (channelid,cb) =>{
    const url = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCeEP6GESh2t4-e2132uj3Sg&maxResults=25&key=AIzaSyD9XfS-tUOI-CDC4w4dfIA8BaopFxEDO4w';
    request({url,json:true},(error,response)=>{
        if(error){
            cb('An error occures',undefined)
        } else{
            console.log('Called')
            // console.log('Playlist');
            cb(undefined,response.body);
        }
    })
}

module.exports = youtubePlaylist