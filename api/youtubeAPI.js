const request = require('request')
const youtubeAPI = (channelid,cb) =>{
    const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id='+channelid+'&key=AIzaSyD9XfS-tUOI-CDC4w4dfIA8BaopFxEDO4w';
    request({url,json:true},(error,response)=>{
        if(error){
            cb('An error occures',undefined)
        } else{
            cb(undefined,response.body.items[0])
        }
    })
}

module.exports = youtubeAPI