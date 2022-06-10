function getChannelDetails(event){
    var channel = document.getElementById("channel_name").value;
    // fetch('http:localhost:3000/youtube?channelid='+channel).then((response)=>{
    //     console.log(response.json());
    // }).catch((error)=>{
    //     console.log(error);
    // })

    axios.get('http://localhost:3000/youtube?channelid='+channel).then((response)=>{
        const channel_name = document.getElementById('channel-name');
        const channel_description = document.getElementById('channel-description');
        const channel_subscribers = document.getElementById('channel-subscribers')
    }).catch((error)=>{
        console.log(error);
    })
}