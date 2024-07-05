import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

import { Link } from "react-router-dom";

import { toggleProfile } from "../utils/profileSlice";

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
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults(
      {[searchQuery]: json[1]}
    ))
  }


  const togglMenuHandler = () => {
    dispatch(toggleMenu());
  }
  const toggleProfileHandle = () => {
    dispatch(toggleProfile());
  }

  return (
    <div className=" grid grid-flow-col h-20 items-center opacity-95 border p-5 fixed w-full top-0 bg-white shadow-md shadow-gray-200"> 
      <div className="flex col-span-1 items-center">
        <img
        onClick={() => togglMenuHandler()} 
        src="/images/HamburgerMenu.png" alt="Hamburger Menu" className="size-6 cursor-pointer md:flex hidden" />
       
       <a href="/">
        <img src="/images/logo.png" alt="logo" className="md:h-6 h-8 md:ml-6 cursor-pointer" />
       </a>
       
      </div>

      <div className="flex col-span-10 md:ml-28 ml-4 items-center ">

        <div className="w-full">
          <div className="md:flex hidden">
          
            <input
            type="text"
            placeholder="Search"
            className=" sm:flex hidden py-2 px-4 w-2/3 rounded-tl-full  rounded-bl-full outline-none border-gray-300 border border-r-0"
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />

            <div
              className=" sm:rounded-tr-full  sm:rounded-br-full sm:py-2 sm:px-5 sm:ml-0 ml-20 sm:border-gray-300 sm:border sm:bg-gray-100 ">
              <img src="/images/search.png" alt="search_icon" className=" size-6 "/>
            </div>

            <div
              className="bg-gray-100 p-2 rounded-full ml-6 lg:flex hidden">
              <img src="/images/voiceRec.png" alt="Voice recorder" className="size-6" />
            </div>
          </div>

          {showSuggestions && <div className="fixed bg-white shadow-md  shadow-gray-600 rounded-xl py-3 px-4 xl:w-[555px] sm:w-[240px] sm:flex hidden ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="hover:bg-gray-50 py-2 px-2 shadow-sm">{s}</li>
              ))}
             
            </ul>
          </div>} 
        </div>

      </div>

      <div className="flex col-span-1">
        
        <div className=" mr-6 md:flex hidden">
          <img className="size-7" src="/images/create.png" alt="create_video" />
        </div>
        <Link to='/Notification'>
        <div className=" mr-6 cursor-pointer border-gray-300 border rounded-md shadow-gray-500 shadow-md active:border-none active:shadow-none ">
          <img className="size-7 cursor-pointer rounded-md" src="/images/notification.gif" alt="notification" />
        </div>
        </Link>
        
        <div onClick={() => toggleProfileHandle()} className=" cursor-pointer border-gray-300 border rounded-md shadow-gray-500 shadow-md active:border-none active:shadow-none ">
          <img className="size-7 rounded-md" src="/images/myprofile.gif" alt="profile" />
        </div>
       

      </div>

    </div>
  )
}

export default Header

