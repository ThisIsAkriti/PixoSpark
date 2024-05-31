import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import {  useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const [searchParams] = useSearchParams() ;
  //console.log(searchParams.get('v'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
    <div className="flex flex-col">
      <div>
        <iframe
          width="1000"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=VgAEGW3JMbysJZbC"}
          title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
      </div>
      <CommentSection/>
    </div>
    </>
  )
}

export default WatchPage
