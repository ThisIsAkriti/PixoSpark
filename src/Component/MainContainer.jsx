import { useSelector } from "react-redux";
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div>
     <div className={`${isMenuOpen ? "md:ml-[20%]" : "md:ml-8"}`}>
      <ButtonList/>
      <VideoContainer/>
      </div>
    </div>
  )

}

export default MainContainer
