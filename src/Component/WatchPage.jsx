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
      <div className= "flex">
        <div>
        <iframe
          className="rounded-lg mt-1"
          width="1000"
          height="450"
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
