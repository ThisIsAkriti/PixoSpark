import { useEffect, useState } from "react"
import {  url} from "../utils/constants";
import VideoContainerCards from "./VideoContainerCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = ({category}) => { 
  
  const [VideoInfo , setVideoInfo] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  useEffect(() => {

    getVideos();

  } , [category])
  
  const getVideos = async () => { 
    
    const Url = url + category;
    const data = await fetch(Url);
    const json = await data.json();
    console.log(json)
    setVideoInfo(json.items);
  
  }

  return (
    <>
      {!isMenuOpen &&  <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto w-full gap-x-4">
        {VideoInfo.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id }>
          <VideoContainerCards key={video.id} info={video}/>
        </Link>
        ))}
        
      </div>}
      
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
        {VideoInfo.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id }>
          <VideoContainerCards key={video.id} info={video}/>
        </Link>
        ))}
        
      </div>

    </>
  )
}

export default VideoContainer
