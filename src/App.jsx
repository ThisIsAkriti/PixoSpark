import Header from "./Component/Header"
import Body from "./Component/Body"
import { Provider } from "react-redux"
import store from "./utils/store"
import { Route, Routes,  } from "react-router-dom";
import WatchPage from "./Component/WatchPage";
import Notification from "./Component/Notification";



const App = () => {
 
  return (
    <Provider store={store}>
    <div className=" font-poppins">
      <Header/>
      <Routes>
        <Route path='/' element = {<Body/>}/>
        <Route path='/watch' element = {<WatchPage/>}/>
        <Route path="/Notification" element = {<Notification/>}/>

      </Routes>
    </div>
  </Provider>
  )
}

export default App
