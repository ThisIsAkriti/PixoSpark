import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { closeMenu, toggleMenu } from "../utils/appSlice";

import { API_KEY, videoData_Api } from "../utils/constants";
import WatchPageDetails from "./WatchPageDetails";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  const [apiData , setApiData] = useState([]);
  const dataVideo = apiData;

  const fetchVidoData = async() => {
    const videoData_URL = videoData_Api+ searchParams.get('v');
    const data = await fetch(videoData_URL);
    const json = await data.json();
    setApiData(json.items[0])
    console.log(json.items[0])
  }

  useEffect(() => {
    fetchVidoData();
  },[])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
  
    <div className="flex flex-col mt-20 p-1">
      <div className= "md:flex">
        <div className="px-2">

          <iframe
            className="md:bg-red-700 lg:bg-green-700 sm:bg-yellow-400 bg-blue-700 py-1 flex m-auto rounded-lg mt-1 lg:w-[1000px] md:w-[900px] sm:w-[620px] w-[390px]  md:h-[450px] sm:h-[350px] h-[250px] md:shadow-none shadow-md shadow-gray-400 mb-6 md:mb-0"
          
            src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=VgAEGW3JMbysJZbC?autoplay=1"}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe> 

        </div>

        <div className="w-full md:flex hidden">
        <LiveChat/>
        </div>
      </div>
      <WatchPageDetails  info = {dataVideo}/>
      <CommentSection/>
    </div>
    <div className="w-full md:hidden ">
      <LiveChat/>
    </div>
    </>
  )
}

export default WatchPage