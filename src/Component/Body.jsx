import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const Body = () => {
  return (
    <div>
        <div className="flex">
        <Sidebar/>
        <Outlet/>
        </div>
      
    </div>
  )
}

export default Body
