const express = require('express')
const app = express()
const youtubeAPI = require('./youtubeAPI')
const cors = require('cors')
app.use(cors())
app.get('/youtube',(req,res)=>{
    if(!req.query.channelid){
        return res.send({
            error:'Enter Youtube Channel ID'
        })
    }
    youtubeAPI(req.query.channelid,(error,response)=>{
        if(error){
            return res.send(error);
        } else{
            //console.log('Response:',response);
            return res.send(response);
        }
    })
})


app.listen(3000,()=>{
    console.log('Started');
})