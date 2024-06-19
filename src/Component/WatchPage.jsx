import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import {  useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams() ;
  //console.log(searchParams.get('v'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
    <div className="flex flex-col w-full mr-1">
      <div className= "md:flex">
        <div>
        <iframe
          className="flex m-auto rounded-lg mt-1 md:w-[1000px] sm:w-[900px] w-[460px]  md:h-[450px] sm:h-[300px] h-[250px] md:shadow-none shadow-md shadow-gray-400 mb-6 md:mb-0"
        
          src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=VgAEGW3JMbysJZbC"}
          title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        </div>

        <div className="w-full">
          <LiveChat/>
        </div>
      </div>
      <CommentSection/>
    </div>
    </>
  )
}

export default WatchPage
