import { useEffect } from "react"
import ChatMsgs from "./ChatMsgs"
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/chatSlice";
import { generate, randomMessages } from "../utils/helper";
const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chatMsgs. messages);

  useEffect(() => {
   
    const i =setInterval(() => {
      //api polling
      console.log("Polling");
      dispatch( addMsg({
        name: generate(),
        message:randomMessages(20)
      }))
    }, 500)
    return() => clearInterval(i);
  })
  
  return (
    <div className="w-full border-gray-400  bg-slate-50 rounded-lg  border m-1 text-xs h-[450px] overflow-y-scroll no-scrollbar flex flex-col-reverse">
      
      {chatMessages.map(c => <ChatMsgs
       key={c.index}
       name ={c.name}
       messages={c.message}
      />)}
    </div>
  )
}

export default LiveChat
