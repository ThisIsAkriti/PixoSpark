import { useEffect, useState } from "react"
import { url} from "../utils/constants";
import VideoContainerCards from "./VideoContainerCards";

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
      {VideoInfo.map(video => <VideoContainerCards key={video.videoId} info={video}/> )}
      
    </div>
  )
}

export default VideoContainer
