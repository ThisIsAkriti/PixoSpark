import { useEffect, useState } from "react"
import { url} from "../utils/constants";
import VideoContainerCards from "./VideoContainerCards";
import { Link } from "react-router-dom";

const VideoContainer = () => { 
  const [VideoInfo , setVideoInfo] = useState([]);
  useEffect(() => {

    getVideos();

  } , [])
  
  const getVideos = async () => { 
    const data = await fetch(url);
    const json = await data.json();
   
    setVideoInfo(json.items);
    console.log(json.items)
  }

  return (
    <div className="flex flex-wrap">
      {VideoInfo.map(video => (
      <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId }>
        <VideoContainerCards key={video.id.videoId} info={video}/>
      </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer
