import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  if(!isMenuOpen) return null;

  return (
    <div className=" shadow-md shadow-gray-400 py-4 px-10">
      <div className="space-y-4 ">
        <div className="p-2 space-y-3">
        <Link to={"/"}>
          <p>Home</p>
        </Link> 
        <p>Shorts</p>
        <p>Subscription</p>
        </div>
        
        <div className=" border-gray-300 border-t p-2">
          <p className=" font-bold mb-3">You</p>
          <div className=" space-y-3">
            <p>History</p>
            <p>Playlists</p>
            <p>Watch later</p>
            <p>Liked videos</p>
          </div>
        </div>

        <div className="border-gray-300 border-t p-2">
          <p className="font-bold mb-3">Explore</p>
          <div className="space-y-3">
            <p>Trending</p>
            <p>Shopping</p>
            <p>Music</p>
            <p>Movies</p>
            <p>Live</p>
            <p>Gaming</p>
            <p>News</p>
            <p>Sports</p>
            <p>Courses</p>
            <p>Fashion & Beauty</p>
            <p>Podcasts</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Sidebar
