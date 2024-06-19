import { useSelector } from "react-redux";
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  if(isMenuOpen) return (
    <div className= "ml-[190px]">
      <ButtonList/>
      <VideoContainer/>
    </div>
  )

  return (
    <div>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )

}

export default MainContainer
