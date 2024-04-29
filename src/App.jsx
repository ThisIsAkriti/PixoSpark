import Header from "./Component/Header"
import Body from "./Component/Body"
import { Provider } from "react-redux"
import store from "./utils/store"
function App() {
 
  return (
    <Provider store={store}>
    <div className=" font-poppins">
      <Header/>
      <Body/>
    </div>
    </Provider>
  )
}

export default App
