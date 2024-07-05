
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import Profile from "./Profile"
import { useState } from "react"
const Body = () => {
  const [category , setCategory] = useState(0)
  return (
    <div>
        <div className="flex mt-20">
        <Sidebar category = {category} setCategory = {setCategory}/>
        <Profile/>
        <Outlet/>
        <MainContainer category = {category}/>
        </div>
      
    </div>
  )
}

export default Body
