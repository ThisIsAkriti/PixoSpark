
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import Profile from "./Profile"
const Body = () => {
  return (
    <div>
        <div className="flex mt-20">
        <Sidebar/>
        <Profile/>
        <Outlet/>
        <MainContainer/>
        </div>
      
    </div>
  )
}

export default Body
