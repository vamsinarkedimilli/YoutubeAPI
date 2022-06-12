function getChannelDetails(){
    var channel = document.getElementById("channel_name").value;
    axios.get('http://localhost:3000/youtube?channelid='+channel).then((response)=>{
        if(response.data.error){
            window.alert("Please Enter Youtube Channel ID");
            return
        }
        const channel_name = document.getElementById('channel-name');
        const channel_description = document.getElementById('channel-description');
        const channel_subscribers = document.getElementById('channel-subscribers');
        const channel_videos = document.getElementById('channel-videos');
        const container = document.getElementsByClassName('channel-details')
        channel_name.innerHTML = "<b>Channel Title: </b>"+response.data.snippet.title;
        channel_description.innerHTML = "<b>Channel Description: </b>"+response.data.snippet.description;
        channel_subscribers.innerHTML = "<b>Channel Subscribers: </b>"+response.data.statistics.subscriberCount;
        channel_videos.innerHTML = "<b>Channel Videos: </b>"+response.data.statistics.videoCount;
        container[0].style.display='block';
        document.getElementById('channel-image').src=response.data.snippet.thumbnails.high.url; 
        document.getElementById('channel-image').style.display='block';
        document.getElementById('link-btn').href='https://www.youtube.com/channel/'+channel;
        document.getElementById("get-playlists").addEventListener('click',getPlaylists)
    }).catch((error)=>{
        console.log(error);  
    })
}

function getPlaylists(channel) {
    axios.get('http://localhost:3000/youtubePlaylist?channelid='+channel).then((response)=>{
        console.log(response.data.items);
    }).catch((error)=>{
        console.log(error);
    })
}