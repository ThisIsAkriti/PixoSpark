/* eslint-disable react/prop-types */

const VideoContainerCards = ({ info }) => {
  
  const {snippet} = info;
  const {channelTitle , thumbnails , title , publishTime} = snippet;
  return(
    <div className="py-2 md:px-4 md:m-2 ml-6 md:w-64 sm:w-80 w-[440px] shadow-md shadow-gray-500 rounded-lg md:mb-0 mb-8">
      <img className=" rounded-md md:h-auto h-40 w-full object-cover" src={thumbnails.high.url} alt="thumbnail_Image" />
      <ul className="p-2">
        
        <li className=" font-bold py-2 text-lg">{title}</li>
        <li className="text-md text-gray-500 ">{channelTitle}</li>
        
        <li className="text-sm text-gray-500">{publishTime}</li>

      </ul>
    </div>
  )
}
export default VideoContainerCards
