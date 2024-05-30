import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

  const [searchQuery , setSearchQuery] = useState("")
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
 const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else {
        getSearchSuggestions()
      }
    } , 200);
    
    return() => {
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSearchSuggestions = async() => {
    console.log("apicall" + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults(
      {[searchQuery]: json[1]}
    ))
    //console.log(json[1])
  }


  const togglMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className=" grid grid-flow-col h-20 items-center opacity-95 border p-5 fixed w-full top-0 bg-white shadow-md shadow-gray-200"> 
      <div className="flex col-span-1 items-center">
        <img
         onClick={() => togglMenuHandler()} 
         src="/images/HamburgerMenu.png" alt="Hamburger Menu" className="size-6 cursor-pointer" />
        <img src="/images/logo.png" alt="logo"  className=" h-6 ml-6 cursor-pointer"/>
      </div>

      <div className="flex col-span-10 ml-28 items-center ">

        <div className="w-full">
          <div className="flex">
          
            <input
            type="text"
            placeholder="Search"
            className=" py-2 px-4 w-2/3 rounded-tl-full  rounded-bl-full outline-none border-gray-300 border border-r-0"
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />

            <div
              className=" rounded-tr-full  rounded-br-full py-2  px-5 border-gray-300 border bg-gray-100 ">
              <img src="/images/search.png" alt="search_icon" className=" size-6 "/>
            </div>

            <div
              className="bg-gray-100 p-2 rounded-full ml-6">
              <img src="/images/voiceRec.png" alt="Voice recorder" className="size-6" />
            </div>
          </div>

          {showSuggestions && <div className="fixed bg-white shadow-md  shadow-gray-600 rounded-xl py-3 px-4 w-[555px] ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="hover:bg-gray-50 py-2 px-2 shadow-sm">{s}</li>
              ))}
             
            </ul>
          </div>} 
        </div>

      </div>

      <div className="flex col-span-1">
        
        <div className=" mr-6">
          <img className="size-6" src="/images/create.png" alt="create_video" />
        </div>

        <div className=" mr-6">
          <img className="size-6" src="/images/notifications.png" alt="notification" />
        </div>
        
        <div>
          <img className="size-6" src="/images/profile.png" alt="profile" />
        </div>

      </div>

    </div>
  )
}

export default Header

/**  */
