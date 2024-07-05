/* eslint-disable react/prop-types */

import moment from "moment/moment";
import { valueConverter } from "../utils/constants";

const VideoContainerCards = ({ info }) => {
  
  const {snippet} = info;
  const {statistics} = info;
  const {channelTitle , thumbnails , title , publishedAt } = snippet;
  const { viewCount} = statistics;
  return(
    <div className=" md:m-2 md:ml-6 m-auto md:w-60 sm:w-80 w-[400px] shadow-md shadow-gray-300 rounded-md md:mb-4 mb-8">
      <img className=" rounded-tr-md rounded-tl-md md:h-auto h-40 w-full object-cover" src={thumbnails.standard.url} alt="thumbnail_Image" />
      <ul className="p-2 space-y-2">
        
        <li className=" font-bold text-[16px] line-clamp-2 ">{title}</li>
        <li className="text-md text-gray-500 text-sm ">{channelTitle}</li>
        <div className="flex space-x-4 text-sm">
          
          <li className=" text-gray-500">{valueConverter(viewCount)} views</li>
          <li className=" text-gray-500">&bull; {moment(publishedAt).fromNow()}</li>
          
        </div>

      </ul>
    </div>
  )
}
export default VideoContainerCards
