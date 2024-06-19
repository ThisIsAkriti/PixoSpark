
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const Body = () => {
  return (
    <div>
        <div className="flex mt-20">
        <Sidebar/>
        <Outlet/>
        </div>
      
    </div>
  )
}

export default Body
