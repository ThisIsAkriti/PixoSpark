
import { useState } from "react";
import { valueConverter } from "../utils/constants";

const WatchPageDetails = ({ info }) => {
  const [liked , setLiked] = useState(false);
    const isLiked = () => {
      setLiked(!liked);
    }
    return(
    <>
    <div className="flex -mt-4">
      <ul>
        <div className="flex space-x-5 mx-4">
        <li className=" text-gray-500">{valueConverter(info?.statistics?.viewCount)} views</li>
        <li className=" text-gray-500 flex">{valueConverter(info?.statistics?.likeCount)} 
        {!liked && <img className="size-5 mx-1" src="/images/like.png" onClick={isLiked} />}
        {liked && <img src="/images/heart.png" className="size-5 mx-1" onClick={isLiked} /> }
        </li>
        </div>
       
        <div className="px-2 shadow-md mx-2 text-gray-600 bg-gray-100 line-clamp-4">
          {info?.snippet?.description}
        </div>

        <li className=" text-gray-900 font-semibold mt-4 mx-6">{valueConverter(info?.statistics?.commentCount)} Comments</li>
      </ul>     
    </div>
    </>
    )
}

export default WatchPageDetails;