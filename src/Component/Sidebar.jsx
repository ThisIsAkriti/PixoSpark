import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = ({ category , setCategory}) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  if(!isMenuOpen) return null;

  return (
    <div className=" shadow-md shadow-gray-400 py-4 px-8 fixed bg-white h-screen overflow-y-auto">
      <div>
        <div className="px-2">
        <Link to={"/"}>
          <p className="font-bold mb-3 mt-2 cursor-pointer"  onClick={() => setCategory(0)}>Home</p>
        </Link> 
       
        </div>

        <div className="border-gray-300 border-t p-2">
          <p className="font-bold mb-4 mt-3">Explore</p>
          <div className="space-y-4">
            <p className="cursor-pointer" onClick={() => setCategory(28)}>Science & Technology</p>
            <p className="cursor-pointer" onClick={() => setCategory(2)}>Autos & Vehicles</p>
            <p className="cursor-pointer" onClick={() => setCategory(24)}>Entertainment</p>
            <p className="cursor-pointer" onClick={() => setCategory(26)}>Howto & Style </p>
            <p className="cursor-pointer" onClick={() => setCategory(25)}>News & Politics</p>
            <p className="cursor-pointer" onClick={() => setCategory(10)}>Music</p>
            <p className="cursor-pointer" onClick={() => setCategory(2)}>Autos & Vehicle</p>
            <p className="cursor-pointer" onClick={() => setCategory(15)}>Pets & Animals</p>
            <p className="cursor-pointer" onClick={() => setCategory(17)}>Sports</p>
            <p className="cursor-pointer" onClick={() => setCategory(20)}>Gaming</p>
            <p className="cursor-pointer" onClick={() => setCategory(23)}>Comedy</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Sidebar
