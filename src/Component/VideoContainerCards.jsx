/* eslint-disable react/prop-types */

const VideoContainerCards = ({ info }) => {
  
  const {snippet} = info;
  const {channelTitle , thumbnails , title , publishTime} = snippet;
  return(
    <div className="py-2 px-4  m-2 ml-6 w-64 shadow-xl rounded-lg">
      <img className=" rounded-md" src={thumbnails.high.url} alt="thumbnail_Image" />
      <ul className="p-2">
        
        <li className=" font-bold py-2 text-lg">{title}</li>
        <li className="text-md text-gray-500 ">{channelTitle}</li>
        
        <li className="text-sm text-gray-500">{publishTime}</li>

      </ul>
    </div>
  )
}
export default VideoContainerCards
