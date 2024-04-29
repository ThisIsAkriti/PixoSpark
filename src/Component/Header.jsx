import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const togglMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className=" grid grid-flow-col h-20 items-center border-b-gray-300 border p-5"> 
      <div className="flex col-span-1 items-center">
        <img
         onClick={() => togglMenuHandler()} 
         src="/images/HamburgerMenu.png" alt="Hamburger Menu" className="size-6 cursor-pointer" />
        <img src="/images/logo.png" alt="logo"  className=" h-6 ml-6 cursor-pointer"/>
      </div>

      <div className="flex col-span-10 ml-28 items-center ">
          <input type="text" placeholder="Search" className=" py-2 px-4 w-2/3 rounded-tl-full  rounded-bl-full outline-none border-gray-300 border border-r-0"/>
          <div className=" rounded-tr-full  rounded-br-full py-2 px-5 border-gray-300 border bg-gray-100 ">
            <img src="/images/search.png" alt="search_icon" className=" size-6 "/>
          </div>
          <div className="bg-gray-100 p-2 rounded-full ml-6">
              <img src="/images/voiceRec.png" alt="Voice recorder" className="size-6" />
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
