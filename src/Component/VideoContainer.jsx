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
  }

  return (
    <div className="flex flex-wrap">
      {VideoInfo.map(video => (
      <Link key={video.videoId} to={"/watch?v=" + video.videoId }>
        <VideoContainerCards key={video.videoId} info={video}/>
      </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer
