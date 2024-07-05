import { useSelector } from "react-redux";
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div className=" w-full">
     <div className={`${isMenuOpen ? "md:ml-[16%] sm:ml-[30%] flex flex-col" : "sm:ml-6"}`}>
      <ButtonList/>
      <VideoContainer/>
      </div>
    </div>
  )

}

export default MainContainer
