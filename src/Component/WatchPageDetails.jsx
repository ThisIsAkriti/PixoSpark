
import { useState } from "react";
import { valueConverter } from "../utils/constants";

const WatchPageDetails = ({ info }) => {
  console.log(info)
  const [liked , setLiked] = useState(false);
    const isLiked = () => {
      setLiked(!liked);
    }
    return(
    <>
    <div className="flex -mt-6">
      <ul>
        <div className=" font-semibold text-lg mx-4 mb-2">
          | {info?.snippet?.title}
        </div>
        <div className="flex space-x-5 mx-4">
        <li className=" text-gray-500">{valueConverter(info?.statistics?.viewCount)} views</li>
        <li className=" text-gray-500 flex">{valueConverter(info?.statistics?.likeCount)} 
        {!liked && <img className="size-5 mx-1" src="/images/like.png" onClick={isLiked} />}
        {liked && <img src="/images/heart.png" className="size-5 mx-1" onClick={isLiked} /> }
        </li>
        </div>
        
        <div className="px-2 space-y-4 mx-2 my-3 py-4 line-clamp-4 border-y border-t-gray-200">
          <p className=" font-semibold text-lg">{info?.snippet?.channelTitle}</p>
          <p className="text-gray-700 text-sm">{info?.snippet?.description?.slice(0,350)}....</p>
        </div>

        <li className=" text-gray-900 font-semibold mt-4 mx-6">{valueConverter(info?.statistics?.commentCount)} Comments</li>
      </ul>     
    </div>
    </>
    )
}

export default WatchPageDetails;