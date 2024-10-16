import { VideoCard } from "./VideoCard";

const videos=[
    {title:"India's got latent",
    image:"photo.jpg",
    thumb:"samay.jpg",
    channel:"Samay Raina",
    views:"46Mn",
    timestamp:"4 days ago"},

    {title:"China's got latent",
    image:"photo.jpg",
    thumb:"samay.jpg",
    channel:"Samay Raina",
    views:"46Mn",
    timestamp:"4 days ago"},

    {title:"Pakistan's got latent",
    image:"photo.jpg",
    thumb:"samay.jpg",
    channel:"Samay Raina",
    views:"46Mn",
    timestamp:"4 days ago"},

    {title:"India's got latent",
        image:"photo.jpg",
        thumb:"samay.jpg",
        channel:"Samay Raina",
        views:"46Mn",
        timestamp:"4 days ago"},
    
        {title:"China's got latent",
        image:"photo.jpg",
        thumb:"samay.jpg",
        channel:"Samay Raina",
        views:"46Mn",
        timestamp:"4 days ago"},
    
        {title:"Pakistan's got latent",
        image:"photo.jpg",
        thumb:"samay.jpg",
        channel:"Samay Raina",
        views:"46Mn",
        timestamp:"4 days ago"}
]



export const VideoGrid=()=>{
    return(<div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-4 ">
        {videos.map(video=>(
            <VideoCard title={video.title}
            image={video.image}
            thumb={video.thumb}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}/>
        ))}
    </div>

    )
}