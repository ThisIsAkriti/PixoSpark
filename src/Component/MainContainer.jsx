import { useSelector } from "react-redux";
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = ({category}) => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div className=" w-full">
     <div className={`${isMenuOpen ? "md:ml-[16%] sm:ml-[30%] flex flex-col" : "sm:ml-6"}`}>
      <ButtonList/>
      <VideoContainer category = {category}/>
      </div>
    </div>
  )

}

export default MainContainer
