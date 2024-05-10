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
    <div>
      <VideoContainerCards info={VideoInfo[0]}/>
    </div>
  )
}

export default VideoContainer
