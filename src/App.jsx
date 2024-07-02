import Header from "./Component/Header"
import Body from "./Component/Body"
import { Provider } from "react-redux"
import store from "./utils/store"
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";


const App = () => {
 
  return (
    <Provider store={store}>
    <div className=" font-poppins">
      <Header/>
      <Routes>
        <Route path='/' element = {<Body/>}/>
        <Route path='/watch' element = {<WatchPage/>}/>

      </Routes>
    </div>
  </Provider>
  )
}

export default App
