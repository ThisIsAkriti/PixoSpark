
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
const Body = () => {
  return (
    <div>
        <div className="flex mt-20">
        <Sidebar/>
        <Outlet/>
        <MainContainer/>
        </div>
      
    </div>
  )
}

export default Body
