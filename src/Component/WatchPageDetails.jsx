
import { valueConverter } from "../utils/constants";

const WatchPageDetails = ({ watchPageInfo }) => {
    const {statistics} = watchPageInfo;
    console.log("ehllo mito")
    const {viewCount , likeCount , commentCount} = statistics
    console.log(watchPageInfo)
    console.log(viewCount)
    
    

    return(
    <>
    <div className="flex">
      <ul>
        <div className="flex space-x-2 mx-4">
        <li className=" text-gray-500">{valueConverter(viewCount)} views</li>
        <li className=" text-gray-500">{valueConverter(likeCount)} likes</li>
        </div>
       
        <li className=" text-gray-900 font-semibold mt-4 mx-6">{valueConverter(commentCount)} Comments</li>
      </ul>     
    </div>
    </>
    )
}

export default WatchPageDetails;